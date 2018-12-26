const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function() {
  return {
    mode: "development",

    devtool: "inline-source-map",

    target: "web",

    context: path.resolve(__dirname),

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader"
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },

    resolve: {
      extensions: [".ts", ".jsx", ".tsx", ".js"]
    },

    entry: {
      app: "./index.tsx"
      // vendor: ["react", "react-dom"]
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js"
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Custom template using Handlebars",
        filename: "index.html",
        template: "./index.html",
        inject: "body"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8888
    },

    node: {
      console: false,
      global: true,
      process: true,
      __filename: "mock",
      __dirname: "mock",
      Buffer: true,
      setImmediate: true,
      fs: "empty"
    }
  };
};
