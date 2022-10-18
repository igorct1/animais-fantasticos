const path = require("path");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // expressão regular para selecionar todos os arquivos .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
