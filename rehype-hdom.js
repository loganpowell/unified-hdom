"use strict"

var toH = require("hast-to-hyperscript")

var has = {}.hasOwnProperty

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

// Add an HDOM compiler.
module.exports = function rehypeHDOM(options) {
  var settings = options || {}
  /**
   * @example
   * components: {
   *   a: customLink,
   *   p: customPara
   * }
   */
  var components = settings.components || {}
  // assigns `key` attribute of element (+ ascending numbers)
  var key_prefix = settings.prefix || ""

  this.Compiler = compiler

  function compiler(node) {
    // Wrap `hdom` to pass components in.
    function hdom(name, props, children) {
      if (!Array.isArray(children)) children = []
      // way to inject custom components from settings
      var component = has.call(components, name) ? components[name] : name
      // remove empty prop objects
      var proxy
      if (isEmpty(props || {})) {
        proxy = [component]
      } else proxy = [component, props]
      // console.log({ component, props, children });
      // filter out newlines
      var el = proxy.concat(children).filter(function(x) {
        return x !== "\n"
      })
      // console.log({ el })
      return el
    }

    var res = toH(hdom, node, key_prefix)

    console.log({ res })

    return res
  }
}
