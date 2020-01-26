import unified from "unified";
import markdown from "remark-parse";
import slug from "remark-slug";
import toc from "remark-toc";
import github from "remark-github";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import rehypeHDOM from "./rehype-hdom";
import { start } from "@thi.ng/hdom";

var { readFileSync } = require("fs");

var md = readFileSync("./test.md", "utf-8"); // uses parcel built-in

// var text = require("./micro.md") // uses plugin: parcel-plugin-txt

var target = document.getElementById("app");

var processor = unified()
  .use(markdown)
  .use(slug)
  .use(toc)
  .use(github, { repository: "rehypejs/rehype-react" })
  .use(remark2rehype)
  .use(highlight)
  .use(rehypeHDOM, { createElement: React.createElement });

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

const app = processor.processSync(md).contents;

// start RAF update & diff loop
start(app, { root: target, span: false });

// ReactDOM.render(<App />, document.getElementById("app"));
