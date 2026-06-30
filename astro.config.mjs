import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lygion.ai",
  base: process.env.PUBLIC_BASE_PATH || "/",
  output: "static"
});
