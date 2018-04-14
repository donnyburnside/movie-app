const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

const config = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.html']
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      minSize: 10000,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: isProduction ? { discardComments: { removeAll: true } } : false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              require('autoprefixer')({ flexbox: 'no-2009' }),
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }, {
      test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)(\?v=.+)?$/,
      exclude: /(\/fonts)/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }]
    }]
  },
  plugins: [
    // Fix Angular 5 / Webpack warning (WARNING in ./node_modules/@angular/core/esm5/core.js)
    // More: https://github.com/angular/angular/issues/20357#issuecomment-343683491
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, './src'),
      {}
    ),

    // HTML Template
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    // Extract CSS
    new ExtractTextPlugin('styles/[name].css', {
      allChunks: true
    }),

    // Copy images
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' }
    ])
  ]
};


// Export the config
module.exports = config;
