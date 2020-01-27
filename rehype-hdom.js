"use strict"

var toH = require("hast-to-hyperscript")
var tableCellStyle = require("@mapbox/hast-util-table-cell-style")

module.exports = rehypeHDOM

var has = {}.hasOwnProperty

// Add a React compiler.
function rehypeHDOM(options) {
  var settings = options || {}
  var hdom = (tag, attrs, res) => [tag, attrs, res] //settings.hdom;
  var Fragment = settings.Fragment
  var components = settings.components || {}

  this.Compiler = compiler

  function compiler(node) {
    var res = toH(h, tableCellStyle(node), settings.prefix)

    if (node.type === "root") {
      // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
      if (
        res.type === "div" &&
        (node.children.length !== 1 || node.children[0].type !== "element")
      ) {
        res = res.props.children
      } else {
        res = [res]
      }

      return hdom(Fragment || "div", {}, res)
    }

    return res
  }

  // Wrap `hdom` to pass components in.
  function h(name, props = {}, children = []) {
    var component = has.call(components, name) ? components[name] : name
    // console.log({ component, props, children });
    var el = [component, props, ...children]
    // console.log({ el });
    return el
  }
}
