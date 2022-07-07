const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
        entry: "./src/index.tsx",
        mode: "development",
        output: {
                path: path.resolve(__dirname, "dist"),
                filename: "bundle.js",
                publicPath: '/'
        },
        module: {
                rules: [
            
                  {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                  },

                  {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                            loader: 'babel-loader',
                            options: {
                                    presets: [
                                            '@babel/preset-env',
                                            '@babel/preset-react'
                                    ]
                            }
                    }
                  }
            
                ],
              },
              resolve: {
                extensions: [".ts", ".tsx", ".js"],
                
              },
        plugins: [
                new HtmlWebpackPlugin({
                  template: "./src/index.html",
                }),
                new WebpackPwaManifestPlugin({
                        name : "Petgram - Tu app de fotos de mascotas",
                        short_name : "Petgram 🐶",
                        description : "Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente",
                        orientation: 'portrait',
                        display: 'standalone',
                        start_url: '/',
                        scope: '/',
                        background_color : "#fff",
                        theme_color : "#b1a",
                        icons : [
                                {
                                        src : path.resolve(__dirname, "src/assets/icon.png"),
                                        sizes : [96, 128, 192, 256, 384, 512],
                                        destination: path.join('Icons'),
                                        ios: true,
                                }
                        ]
                }),
                new WorkboxWebpackPlugin.GenerateSW({
                        runtimeCaching: [
                                {
                                        urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                                        handler: 'CacheFirst',
                                        options: {
                                                cacheName: 'images'
                                        }
                                },
                                {
                                        urlPattern: new RegExp('https://petgram-server.midudev.now.sh/'),
                                        handler: 'NetworkFirst',
                                        options: {
                                                cacheName: 'api'
                                        }
                                }
                        ]
                })
        ]
}