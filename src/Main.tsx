import { Layout } from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";

export async function Main(pathname = "/") {
  let Page;

  switch (pathname) {
    case "/":
      Page = <Home />;
      break;
    case "/about":
      Page = <About />;
      break;
    default:
      Page = (
        <div>
          <h1>404 - Page Not Found</h1>
        </div>
      );
  }

  return <Layout>{Page}</Layout>;
}
