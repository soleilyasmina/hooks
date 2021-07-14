const path = require("path");

module.exports = {
  entry: "./src/index.js",
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
  module: {
    rules: [
      {
        exclude: path.join(__dirname, "/node_modules/"),
        include: path.join(__dirname, "src"),
        loader: "babel-loader",
        test: /\.js$/,
      },
    ],
  },
  output: {
    environment: {
      destructuring: true,
    },
    filename: "index.js",
    globalObject: "this",
    library: "index",
    libraryTarget: "commonjs2",
    module: true,
    path: path.resolve(__dirname, "./dist"),
  },
};
