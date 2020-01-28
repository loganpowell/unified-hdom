---
metadata: this is metadata
tags:
    - one
    - two
---


---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

##### chicago-style title capitalization is enableable

TOC can be enabled by [`remark-toc`](https://github.com/remarkjs/remark-toc)
## table of contents

## Horizontal Rules

(three underscores)

___

(three dashes)

---

(three stars)

***

## github-flavored markdown task lists

- [ ] Todo
- [x] Done



## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
    - Sub-sub lists need 4 spaces:
        - Ac tristique libero volutpat at
        - Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ---:| ---:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Center aligned columns

| Option | Description |
| :---:| :---:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Image List (test)
- ![cat](https://octodex.github.com/images/dojocat.jpg)
  - sub 1
  - sub 2
- ![minon](https://octodex.github.com/images/minion.png)
  - sub 3
  - sub 4

🔥 

## special headings

### [`codeblock1`](#)

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O  

### footnotes

Footnote 1 link[^a1].

Footnote 2 link[^a2].

Inline footnote [^Text of inline footnote] definition.

Duplicated footnote reference[^a2].

[^a1]: Footnote **can have markup**

    and multiple paragraphs.

[^a2]: Footnote text.


### [Definition lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

The HTML `<dl>` element represents a description list. The element encloses a list of groups of terms (specified using the `<dt>` element) and descriptions (provided by `<dd>` elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

## `remark-github` integration

github references:

-   Commit: f8083175fe890cbf14f41d0a06e7aa35d4989587
-   Commit (fork): foo@f8083175fe890cbf14f41d0a06e7aa35d4989587
-   Commit (repo): remarkjs/remark@e1aa9f6c02de18b9459b7d269712bcb50183ce89
-   Issue or PR (`#`): #1
-   Issue or PR (`GH-`): GH-1
-   Issue or PR (fork): foo#1
-   Issue or PR (project): remarkjs/remark#1
-   Mention: @wooorm

github.com links:

-   Commit: https://github.com/remarkjs/remark/commit/e1aa9f6c02de18b9459b7d269712bcb50183ce89
-   Commit comment: https://github.com/remarkjs/remark/commit/ac63bc3abacf14cf08ca5e2d8f1f8e88a7b9015c#commitcomment-16372693
-   Issue or PR: https://github.com/remarkjs/remark/issues/182
-   Issue or PR comment: https://github.com/remarkjs/remark-github/issues/3#issue-151160339
-   Mention: @ben-eb