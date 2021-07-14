const path = require("path");

module.exports = {
  entry: "./src/index.js",
  experiments: {
    outputModule: true,
  },
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
    library: {
      type: "module",
    },
    module: true,
    path: path.resolve(__dirname, "./dist"),
  },
};
