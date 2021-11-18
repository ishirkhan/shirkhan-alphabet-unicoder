const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-alphabet-unicoder",
      entry: path.resolve(__dirname, "src/unicoder/index.ts"),
      fileName: (format) => `shirkhan-alphabet-unicoder.${format}.js`,
    },
    rollupOptions: {},
  },
});
