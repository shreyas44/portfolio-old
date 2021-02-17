const sveltePreprocess = require("svelte-preprocess")
const mode = process.env.NODE_ENV
const dev = mode === "development"

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: dev,
    defaults: {
      script: "typescript",
      style: "postcss",
    },
  }),
  postcss: true,
  compilerOptions: {
    dev,
    hydratable: true,
  },
}
