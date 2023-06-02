const path = require('path');
require('dotenv').config();
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.TARGET,
  entry: './frontend/index.tsx',
  // externals: [nodeExternals(),{ knex: 'commonjs knex' }],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ ".mjs",'.js', '.ts','.(graphql|gql)'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.jsx?/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        // test: /\.(scss)$/,
        // exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          // 'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
        {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            loaders: 'awesome-typescript-loader'
        }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['frontend', 'node_modules'],
  },
  devServer: {
    static: './dist',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },
    watchFiles: {
      paths: ['src/**/*'],
    },
    proxy: {
      '/api': 'http://localhost:3000/',
      secure: false,
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  //temporarily getting rid of webpack 'file size' errors - TODO: compress images better so they don't exceed recommended file size
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
}
};
