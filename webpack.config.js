const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "asssets": path.resolve(__dirname, "dist/assets/")
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true, // for content security policy https://stackoverflow.com/questions/51393337/react-router-content-security-policy-directive-default-src-self
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};