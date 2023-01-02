/** @format */
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "production.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },
};
