import { hydrateRoot } from "react-dom/client";
import { Main } from "./src/Main";

// Hydrate the app using the current URL path
hydrateRoot(
  document,
  await Main(window.location.pathname)
);
