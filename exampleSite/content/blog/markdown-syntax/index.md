---
title: "Markdown syntax"
description: "A sample of basic Markdown syntax that can be used in Hugo content"
date: 2022-07-02T22:16:29+01:00
draft: false
author: "Jane Doe"
tags:
  - Markdown syntax
toc:
---
This article gives an example of basic Markdown syntax.

<!--more-->

## Paragraph

Enim acclinia opera; ea gemit. Cervice sine tibi forma; non inde rubescere usque fixurus Echione, ut.
Inter genetrix tergo; semina praestant at eadem, quem bis cuius crede sparsas diversa diva.
A inquit cingebant. Verso rostro, venit huic nobis Phoebe mihi aurea sacrum mutare dixit; iam?

Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate
ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur.
Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus,
sin conecerem erum fuga.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli
squiatum, core et que aut hariosam ex eat.


## Blockquotes

The blockquote is a section [within a document] that is quoted from another source.

### Blockquote without attribution

> Oriente nec radios nurus, quod undas, occupat conpescit femina est et cacumine.
> **Note** that you can use *Markdown syntax* within a blockquote.


### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

  | Name  | Age |
  | ----- | --- |
  | Bob   | 27  |
  | Alice | 23  |

### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp; | Markdown&nbsp;&nbsp;&nbsp; | In&nbsp;&nbsp;&nbsp;                | Table  |
| ------------------------ | -------------------------- | ----------------------------------- | ------ |
| *italics*                | **bold**                   | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code` |

## Code Blocks

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Item
  1. First Sub-item
  2. Second Sub-item

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Other Elements — mark

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
