let tailwind = require("tailwindcss");
let autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwind("./tailwind.js"),
    autoprefixer()
  ]
}