var debug = process.env.NODE_ENV !== "production";

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          }
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
          test: /\.svg$/,
          loader: 'svg-inline'
        },
        {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]

    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
