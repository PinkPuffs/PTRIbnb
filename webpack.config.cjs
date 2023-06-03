const path = require("path");
require("dotenv").config();
const process = require("process");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.TARGET,
  entry: "./frontend/index.tsx",
  // externals: [nodeExternals(),{ knex: 'commonjs knex' }],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.frontend.json"),
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.jsx?/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        // test: /\.(scss)$/,
        // exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          // 'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "awesome-typescript-loader",
      },
    ],
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".css",
      ".scss",
      ".png",
      ".mjs",
      ".js",
      ".ts",
      ".(graphql|gql)",
    ],
    modules: ["frontend", "node_modules"],
  },
  devServer: {
    static: "./dist",
    port: 8080,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "build"),
      publicPath: "/build",
    },
    watchFiles: {
      paths: ["src/**/*"],
    },
    proxy: {
      "/api": "http://localhost:3000/",
      secure: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  // //temporarily getting rid of webpack 'file size' errors - TODO: compress images better so they don't exceed recommended file size
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
