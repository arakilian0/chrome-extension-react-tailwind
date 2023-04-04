// Imports
const path = require('path');
const pkg = require('../package.json')
const webpack = require('webpack')

// Webpack Plugins
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CssPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// Webpack Config
function buildWebpack () {
    webpack({
        devtool: 'cheap-module-source-map',
        mode: 'development',
        // Build multiple targets with an Object
        // Instead of a String entry
        entry: {
            // Build popup.jsx
            popup: path.resolve(
                pkg.config.entry,
                'popup.jsx'
            ),
            // Build background.jsx
            background: path.resolve(
                pkg.config.entry, 
                'background.jsx'
            )
        },
        // Build Directory
        output: {
            // Grab filenames from entry^
            filename: '[name].js',
            // Output directory from package.json
            path: path.resolve(pkg.config.output),
        },
        // We're using babel-loader as our ES6 converter
        /* Additional packages needed:
            @babel/core
            @babel/preset-env
            @babel/preset-react */
        module: {
            rules: [
                // Target JavaScript and React JSX files
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        // Babel ES6 Converter
                        loader: 'babel-loader',
                        options: {
                            // Dependencies for building js and jsx
                            presets: [
                                '@babel/preset-env', 
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                // Target CSS files
                {
                    test: /\.css$/i,
                    include: path.resolve(pkg.config.entry),
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ],
        },
        plugins: [
            // Copies specified files/folders to 'output'
            new CopyPlugin({
                patterns: [
                    // Copy src/assets
                    { 
                        from: path.resolve(
                            pkg.config.entry, 
                            pkg.config.assets
                        ), 
                        to: pkg.config.assets 
                    }
                ],
            }),
            // Handles the HTML build process
            new HtmlPlugin({
                // Build src/popup.html
                template: path.resolve(
                    pkg.config.entry, 
                    'popup.html'
                ),
                // Name the new HTML file
                filename: 'popup.html',
                inject: false
            })
        ]
    }, 
    // Catch any errors in the build
    (err, stats) => {
        // Exits the build if error
        if (err) return console.log(err)
        // Else: do something here
        console.log('rebuilt extension...')
    })
}

module.exports = buildWebpack
