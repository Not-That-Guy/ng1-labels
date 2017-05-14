var _ = require('lodash');
var chalk = require('chalk');
var webpack = require('webpack');
const path = require('path');

/**
 * Webpack Plugins
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

/**
 * Webpack Constants
 */
const ROOT = path.resolve( __dirname, 'source');
const BUILD_DESTINATION = path.resolve( __dirname, 'build');
const DIST_DESTINATION = path.resolve( __dirname, 'dist');

var PARAMS_DEFAULT = {
    entry: {
        main: './source/app/root.module.js',
        vendor: ['angular', 'angular-animate']
    },
    output: {
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map'
    },
    plugins: [

      /**
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT,'index.html'),
            inject: 'body'
        })
    ],
    devServer: {
        port: 8081
    }
};
var PARAMS_PER_TARGET = {
    DEV: {
        devtool: 'inline-source-map',
        output: {
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js'
            }),
            new OpenBrowserWebpackPlugin({
                url: 'http://localhost:' + PARAMS_DEFAULT.devServer.port
            })
        ]
    },
    BUILD: {
        output: {
            path: BUILD_DESTINATION
        },
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(['build']),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.[chunkhash].js',
                minChunks: Infinity
            })
        ]
    },
    DIST: {
        output: {
            path: DIST_DESTINATION
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.[chunkhash].js',
                minChunks: Infinity
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false
            })
        ]
    }
};
var TARGET = process.env.NODE_ENV || 'BUILD';
var params = _.merge(PARAMS_DEFAULT, PARAMS_PER_TARGET[TARGET], _mergeArraysCustomizer);

_printBuildInfo(params);

module.exports = {
    resolve: params.resolve,
    entry: params.entry,
    output: params.output,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000'},
                  {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
        ]
    },
    plugins: params.plugins,
    devServer: params.devServer,
    devtool: params.devtool
};

function _printBuildInfo(params) {
    console.log('\nStarting ' + chalk.bold.green('"' + TARGET + '"') + ' build');
    if (TARGET === 'DEV') {
        console.log('Dev server: ' +
            chalk.bold.yellow('http://localhost:' + params.devServer.port + '/webpack-dev-server/index.html') + '\n\n');
    } else {
        console.log('\n\n');
    }
}

function _mergeArraysCustomizer(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
}
