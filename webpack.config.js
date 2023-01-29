const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      {
        test: /\.(m?js)$/i,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader', options: {} }],
      },
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
      {
        test: /\.(svg|php)$/i,
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
      {
        test: /node_modules\/https-proxy-agent\//,
        use: 'null-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin(),
    new ImageminWebpWebpackPlugin(),
  ],
  stats: 'errors-only',
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
};
