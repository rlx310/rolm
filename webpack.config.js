const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 80,
    host: "0.0.0.0",
    historyApiFallback: true
  }
}
