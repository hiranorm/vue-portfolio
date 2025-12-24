module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}