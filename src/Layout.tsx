import Navbar from "@/src/components/Navbar";
import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Bun + React SSR</title>
        <link href="./assets/tailwind.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
