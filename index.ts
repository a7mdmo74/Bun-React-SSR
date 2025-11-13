import { renderToReadableStream } from "react-dom/server";
import { Main } from "./src/Main";
import { serveStatic } from "./middleware/static";
import { logger } from "./middleware/logger";

const buildsMatchers = new Map<string, () => Response>();

const init = async () => {
  const builds = await Bun.build({
    entrypoints: ["./hydrate.tsx"],
    target: "browser",
    splitting: true,
    minify: {
      identifiers: true,
      syntax: true,
      whitespace: true,
    },
  });

  for (const build of builds.outputs) {
    buildsMatchers.set(
      build.path.substring(1),
      () =>
        new Response(build.stream(), {
          headers: {
            "Content-Type": build.type,
          },
        })
    );
  }
};

const serveBuild = (req: Request) => {
  const { pathname } = new URL(req.url);

  const buildFileRequest = buildsMatchers.get(pathname);

  if (buildFileRequest) {
    return buildFileRequest();
  }
};

const servePage = async (req: Request) => {
  const { pathname } = new URL(req.url);

  if (["/", "/about"].includes(pathname)) {
    const AppComponent = await Main(pathname);

    const stream = await renderToReadableStream(AppComponent, {
      bootstrapModules: ["./hydrate.js"],
    });

    return new Response(stream, {
      headers: { "content-type": "text/html" },
    });
  }
};

await init();

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/api/quote") {
      const res = await fetch("https://dummyjson.com/quotes");
      const data = await res.json();

      const quotes = data.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      return new Response(JSON.stringify(randomQuote), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const buildFileRequest = serveBuild(req);
    const startTime = Date.now();
    const staticResponse = await serveStatic(req);
    if (staticResponse) {
      logger(req, startTime, staticResponse);
      return staticResponse;
    }
    if (buildFileRequest) {
      return buildFileRequest;
    }

    const demoPageRequest = await servePage(req);

    if (demoPageRequest) {
      return demoPageRequest;
    }

    return new Response(JSON.stringify({ status: 404, message: "Not found" }), {
      status: 404,
    });
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
