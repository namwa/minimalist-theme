# Hugo Minimalist Theme

Hugo Minimalist Theme is a portfolio and blogging theme.

Live Demo: https://hugo-minimalist-theme.netlify.app

## Features
- Blogging section
- Projects section
- About section
- Netlify form

## Requirements
- Hugo Version 0.96+extended

## Installation

You need to install Hugo first before using this theme.
Please follow the official [installation guide](https://gohugo.io/getting-started/installing/).

## Check Hugo version.
```
hugo version
```
## Create a new Hugo Site

```
hugo new site myNewHugoSite
```

Hugo site will be created in `myNewHugoSite` folder.

## Install theme

Minimalist theme is built with TailwindCSS.

Clone this repo inside your `themes` folder.

```
cd myNewHugoSite/themes

git clone https://github.com/namwa/minimalist-theme.git
```

## Copy example content

Copy all the contents of the `myNewHugoSite/themes/minimalist-theme/exampleSite` folder
to root folder of your Hugo site, ie `myNewHugoSite/`

To copy the files using terminal. Make sure that you're in the project root, i.e the `myNewHugoSite` folder.

```
cp -a themes/minimalist-theme/exampleSite/. .
```

## Update config.yaml

Update your project root config.yaml (you can use config.toml format too).
You need to update `theme` and `themesDir` values in `myNewHugoSite/config.yaml`

```
theme: minimalist-theme
themesDir: themes
```

Set up the configurations in `config.yaml`. [reference](https://github.com/namwa/minimalist-theme/blob/master/exampleSite/config.yaml)


## Run Hugo

### Production

Go to  `themes/minimalist-theme` directory and run `npm run build`.

To generate the Hugo site, from the root folder ie `myNewHugoSite`
```
hugo
```

### Development

Go to  `themes/minimalist-theme` directory and run `npm run watch` to adjust styles in TailwindCSS and
see changes.

Run Hugo's built in local server.
```
hugo server
```
Your local site will be served at `localhost:1313`.


## Create a blog post

To create a blog post uses a command below. It will create a new blog type of content
file based on the archetype template. Blog type archetype includes tags and toc (table of content).
```
hugo new blog/my-first-post.md
```

## Create a project

To create a new project using a default archetype.

```
hugo new projects/my-project.md
```

## Config summary length

Use summaryLength variable in config.yaml to control number of words in the summary.

### Caveat
This theme uses postCSS so you might need to have postcss and postcss-cli installed globally.
To install packages globally, run `npm i -g postcss postcss-cli`
