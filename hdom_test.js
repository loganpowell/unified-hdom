import unified from "unified"
import markdown from "remark-parse"
import remark2rehype from "remark-rehype"

// plugins
import github from "remark-github"
import slug from "remark-slug"
// import toc from "remark-toc"
import deflist from "remark-deflist"
// import highlight from "rehype-highlight"
import subSuper from "remark-sub-super"
import fm from "remark-frontmatter"

// hdom
import { start, renderOnce } from "@thi.ng/hdom"
import { Atom } from "@thi.ng/atom"

// I don't like the trims...
// import titleCase from "remark-capitalize"
// refactored
import titleCase from "./titleCase"
// custom
import rehypeHDOM from "./rehype-hdom"
import extractFM from "./extractFM"

var state = new Atom({})

// var { readFileSync } = require("fs")

// var md1 = readFileSync("./test.md", "utf-8") // uses parcel built-in

var processor = unified()
  .data("settings", { fragment: true })
  .use(markdown, { gfm: true, footnotes: true, pedantic: true })
  // .use(highlight)
  .use(fm, ["yaml"])
  .use(extractFM(state))
  .use(titleCase) // https://title.sh/ Chicago Headings
  .use(subSuper) // sub/superscripts
  .use(slug) // <h1 id="title">Title</h1>
  // .use(toc) // ## Table of C, ontents
  .use(deflist) // <dl><dt></dt><dd></dd></dl>
  // github issues/comments/mentions/etc.
  .use(github, { repository: "remarkjs/remark-github" })
  .use(remark2rehype)
  .use(rehypeHDOM)

// const app = ({ state }) => ["div", processor.processSync(md).contents];

// start RAF update & diff loop
// start(ctx => app(ctx), { root: target, span: false, ctx: { state } });
fetch(
  "https://raw.githubusercontent.com/loganpowell/unified-hdom/master/test.md"
)
  .then(r => r.text())
  .then(d => {
    console.log({ hdom: processor.processSync(d).contents })
    renderOnce(processor.processSync(d).contents, {
      root: target,
      span: false
    })
    console.log({ Atom: state.deref() })
  })

var target = document.getElementById("app")

/**
 *
 * TODO:
 * 1. preprocess markdown
 * 2. store parsed md (hdom) and frontmatter into an object
 *    { frontmatter, hdom }
 */
