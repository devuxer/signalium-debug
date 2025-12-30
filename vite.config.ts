import react from "@vitejs/plugin-react";
import { signaliumPreset } from "signalium/transform";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({ babel: { plugins: [["babel-plugin-react-compiler"]], presets: [signaliumPreset()] } }),
        viteTsconfigPaths(),
    ],
    server: { open: true, port: 3000 },
});
