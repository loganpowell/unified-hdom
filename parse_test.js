window.global = window
window.Buffer = window.Buffer || require("buffer").Buffer

const unified = require("unified")
const parse = require("remark-parse")
// const parse = require("rehype-dom-parse")
const mdToHtml = require("remark-rehype")
// const stringify = require("rehype-stringify")
const stringify = require("rehype-dom-stringify")

// var vfile = require("to-vfile")
// var report = require("vfile-reporter")
// var parse = require("remark-parse")
// var stringify = require("remark-stringify")
var frontmatter = require("remark-frontmatter")

function logger() {
  return console.dir
}

module.exports = str =>
  unified()
    .use(parse)
    .use(stringify)
    .use(frontmatter, ["yaml", "toml"])
    // .use(logger)
    .processSync(str)
    .toString()

// const processor = unified()
//   .use(parse)
//   .use(stringify)
//   .data("settings", { fragment: true })
