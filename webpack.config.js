const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "binary"),
    filename: "app.js",
  },
  mode: "production",
};