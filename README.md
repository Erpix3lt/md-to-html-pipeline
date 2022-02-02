# markdown-blog
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)<br/>
Little markdown blog built by using Express, implementing EJS. Theme I used is [Cactus Dark](https://probberechts.github.io/hexo-theme-cactus/). I modified it's CSS a little bit, here's a quick demo if you wanna know how it looks, and how the blog works: [Click click!](https://alef.wtf/blog/)

## Usage
- Run `npm i` and `node index.js`

## Post Layout
- Place your markdown file in `./views/blog/posts/`
- Use this layout on your `.md` file:

```md
---
title: Your Title
description: Your post's description
author: Your name, or the post writer's name, idk.
date: 31/05/2020
---

## And here goes the article!
* You can use any of **the markdown** _you want_!
* Please refer to 'markdown-test.md' for all the markdown possibilities!
```

## TODO
- [ ] Add a config file that stores blog information.
- [ ] Create a web based post creator.
- [ ] Clean the code!

## Known Issues
* The post title should be same as the file name, like if the title is "This Is An Example Title", the filename should be `this-is-an-example-title.md`
* The directory handling is not-so-good.It sometimes break and I'm looking forward to fix that
