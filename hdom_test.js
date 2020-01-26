import unified from "unified";
import markdown from "remark-parse";
import slug from "remark-slug";
import toc from "remark-toc";
import github from "remark-github";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import rehypeHDOM from "./rehype-hdom";

import remarkSubSuper from "remark-sub-super";
import remarkEmoticons from "remark-preset-gfm";
import gfm from "remark-preset-gfm";

import { start, renderOnce } from "@thi.ng/hdom";
import { Atom } from "@thi.ng/atom";

var state = new Atom({});

var { readFileSync } = require("fs");

var md1 = readFileSync("./test.md", "utf-8"); // uses parcel built-in
var md = fetch(
  "https://raw.githubusercontent.com/loganpowell/unified-hdom/master/test.md"
)
  .then(r => r.text())
  .then(d => {
    console.log({ d });
    state.reset(d);
  });

// var text = require("./micro.md") // uses plugin: parcel-plugin-txt

var target = document.getElementById("app");

var processor = unified()
  .use(markdown, { gfm: true, footnotes: true, pedantic: true })
  .use(remarkEmoticons)
  .use(remarkSubSuper)
  .use(slug)
  .use(toc)
  .use(github, { repository: "rehypejs/rehype-react" })
  .use(remark2rehype)
  .use(highlight)
  .use(rehypeHDOM);

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { text: "# Hello\n\n## Table of Contents\n\n## @rhysd" };
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(ev) {
//     this.setState({ text: ev.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <textarea value={this.state.text} onChange={this.onChange} />
//         <div id="preview">
//           {processor.processSync(this.state.text).contents}
//         </div>
//       </div>
//     );
//   }
// }

// const app = ({ state }) => ["div", processor.processSync(md).contents];

// start RAF update & diff loop
// start(ctx => app(ctx), { root: target, span: false, ctx: { state } });
fetch(
  "https://raw.githubusercontent.com/loganpowell/unified-hdom/master/test.md"
)
  .then(r => r.text())
  .then(d => {
    renderOnce(["div", processor.processSync(d).contents], {
      root: target,
      span: false
    });
  });
// ReactDOM.render(<App />, document.getElementById("app"));
