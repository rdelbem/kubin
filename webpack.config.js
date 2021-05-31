const path = require("path");
var webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  entry: {
    home: ["./src/App.js"],
  },

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    contentBase: "./src",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
    ],

    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "styles.css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MinifyPlugin(
      {},
      {
        comments: false,
      }
    ),

    new MiniCssExtractPlugin({
      output: {
        filename: "./dist/styles.css",
        path: path.resolve(__dirname, "dist"),
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
