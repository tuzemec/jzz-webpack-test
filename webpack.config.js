const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: { errorDetails: true },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/jazz\-midi/, (data) => {
      delete data.dependencies[0].critical;
      return data;
    }),
    new HtmlWebpackPlugin({
      title: "WebMidiAmp",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
  ],
};
