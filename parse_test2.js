var unified = require("unified");
var markdown = require("remark-parse");
var remark2rehype = require("remark-rehype");
var doc = require("rehype-document");
var format = require("rehype-format");
var html = require("rehype-stringify");
var report = require("vfile-reporter");
var rehypeHDOM = require("./rehype-hdom");
var h = require("hastscript");

var { readFileSync } = require("fs");

var md = readFileSync("./micro.md", "utf-8"); // uses parcel built-in

// var text = require("./micro.md") // uses plugin: parcel-plugin-txt

var target = document.getElementById("app");

/**
 * create simple API from github raw as was done with citysdk
 */
unified()
  .use(markdown)
  .use(remark2rehype)
  // .use(doc, { title: "👋🌍" })
  .use(format)
  .use(html)
  .process(md, function(err, file) {
    console.error(report(err || file));
    var res = String(file);
    console.log(res);
    target.innerHTML = res;
  });
