const path = require("path");
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "app.js"
    },
    mode: "production"
}