import { defineConfig } from "@solidjs/start/config";
import solidSvg from "vite-plugin-solid-svg";
// import netlify from 'solid-start-netlify';
// import solidStartNetlify from "solid-start-netlify";

export default defineConfig({
    ssr: false,
    server: {
        baseURL: "/",
        preset: "static"
    },
    vite: {
        plugins: [solidSvg()],
    },
});
