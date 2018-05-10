const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css');
  const Uglify = new UglifyJsPlugin({
    test: /\.js($|\?)/i
  })
  const plugins = isProduction ? [CSSExtract] : [CSSExtract]

  return {
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
        use: CSSExtract.extract({
          use: [
            { loader: "css-loader",  options: { sourceMap: !isProduction }}, 
            { loader: "sass-loader", options: { sourceMap: !isProduction }}
          ]
        })
      }]
    },
    plugins: plugins,
    devtool: isProduction ? 'source-map' : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 80,
      host: "0.0.0.0",
      historyApiFallback: true,
    }
  }
}

