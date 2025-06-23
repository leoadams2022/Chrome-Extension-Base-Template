const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator");
const isProduction = process.env.NODE_ENV === "production"; // Check if in production mode

module.exports = {
  entry: {
    content: "./src/content/App.js", // Add other entry points if needed
    popup: "./src/popup/App.js",
    background: "./src/background.js",
    options: "./src/options/options.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/", // Set this to your base URL (can be relative or absolute)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/inline", // Inline the image as Base64
        // type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "images" },
        { from: "./src/manifest.json" },
        { from: "./src/popup/popup.html" },
      ],
    }),
    // Conditionally include the obfuscator in production mode
    ...(isProduction
      ? [
          new WebpackObfuscator(
            {
              // Obfuscation options
              compact: true,
              controlFlowFlattening: true,
              deadCodeInjection: true,
              stringArray: true,
            },
            []
          ), // Exclude any specific files if necessary
        ]
      : []), // Empty array if not in production
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      // Example using async
      chunks: "async", // Only split async chunks
    },
  },

  mode: isProduction ? "production" : "development", // Set mode based on environment // 'development' or 'production' - Change to 'production' for the final build
  devtool: isProduction ? false : "source-map", // Disable source maps in production
};
