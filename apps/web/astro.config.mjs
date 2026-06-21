// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bidipeppercrap.com",
  // Default output is static — pure HTML/CSS, zero client JS.
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // The shared schema package ships TypeScript source; make sure Vite
    // transpiles it instead of treating it as an external dependency.
    ssr: { noExternal: ["@bidipeppercrap/schema"] },
  },
});
