import { defineConfig } from "umi";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  //   {
  //     path: "/personal/personal",
  //     component: "personal/personal",
  //     wrappers: ["@/wrappers/auth"],
  //   },
  //   { path: "login", component: "Login" },
  //   { path: "/idPage/:id", component: "[id]" },
  //   { path: "/foo/:slug", component: "foo/slug.tsx" },
  // ],
  npmClient: "pnpm",
});
