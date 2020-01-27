const title = require("title")
const visit = require("unist-util-visit")
const YAML = require("yamljs")

module.exports = state => () => (tree, file) => {
  visit(tree, "yaml", node => {
    state.reset(YAML.parse(node.value))
  })
}
