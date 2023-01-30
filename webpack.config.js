const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 999,
  },
  module: {
    rules: [
      // ---- SCSS
      {
        test: /\.(s?css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'sass-loader', options: {} },
        ],
      },
      // ---- JS
      {
        test: /\.(m?js)$/i,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader', options: {} }],
      },
      // ---- images
      {
        test: /\.(png|jpe?g|webp|gif)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    'imagemin-gifsicle',
                    'imagemin-mozjpeg',
                    'imagemin-pngquant',
                    'imagemin-svgo',
                  ],
                },
              },
            },
          },
        ],
        type: 'asset',
      },
      // ---- svg
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
        type: 'asset',
      },
      // ---- php
      {
        test: /\.(php)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      // ---- null
      {
        test: /node_modules\/https-proxy-agent\//,
        use: 'null-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ImageminWebpWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Клініка офтольмології',
      template: './src/index.html',
      filename: 'index.html',
      minify: true,
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/header.html'),
      location: 'myhead',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/hero.html'),
      location: 'hero',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/abbility.html'),
      location: 'abbility',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/about.html'),
      location: 'about',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/discount.html'),
      location: 'discount',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/reviews.html'),
      location: 'reviews',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/faq.html'),
      location: 'faq',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/news.html'),
      location: 'news',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/form.html'),
      location: 'myform',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/find.html'),
      location: 'find',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/footer.html'),
      location: 'myfoot',
      template_filename: ['index.html'],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },

  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,

      querystring: false,
      url: false,
      os: false,
      assert: false,
      request: false,

      http: false,
      https: false,
      zlib: false,
      path: false,
      stream: false,
      util: false,
      crypto: false,
      child_process: false,
      buffer: false,
    },
  },
  stats: 'errors-only',
};
