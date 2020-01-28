import unified from "unified"
import markdown from "remark-parse"
import remark2rehype from "remark-rehype"

// plugins
import github from "remark-github"
import slug from "remark-slug"
import deflist from "remark-deflist"
// import highlight from "rehype-highlight"
import subSuper from "remark-sub-super"
import fm from "remark-frontmatter"

// import { readFileSync } from "fs"

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

// var md1 = readFileSync("./test.md", "utf-8") // uses parcel built-in

var processor = unified()
  .data("settings", { fragment: true })
  .use(markdown, { gfm: true, footnotes: true, pedantic: true })
  // .use(highlight)
  .use(fm, ["yaml"])
  .use(extractFM(state))
  // https://title.sh/ Chicago Headings
  .use(titleCase)
  // sub/superscripts
  .use(subSuper)
  // <h1 id="title">Title</h1>
  .use(slug)
  // .use(toc) // ## Table of C, ontents
  .use(deflist) // <dl><dt></dt><dd></dd></dl>
  // github issues/comments/mentions/etc.
  .use(github, { repository: "remarkjs/remark-github" })
  .use(remark2rehype)
  // very expensive syntax highlighting
  // .use(highlight)
  .use(rehypeHDOM)

fetch(
  "https://raw.githubusercontent.com/loganpowell/unified-hdom/master/test.md"
)
  .then(r => r.text())
  .then(markdown => {
    console.log(
      JSON.stringify(processor.processSync(markdown).contents, null, 2)
    )
    renderOnce(processor.processSync(markdown).contents, {
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
