const Router = require("express").Router(),
    fs = require("fs"),
    md = require("markdown-it")(),
    matter = require('gray-matter'),
    postsDir = "./views/blog/posts/";

const postNames = [],
    postDate = [];

let post = fs.readdirSync(postsDir).filter(file => file.endsWith(".md"));
post.sort(function(a,b){
    var dateA = matter.read(postsDir+a).data.date.replace(/\//g,"");
    var dateB = matter.read(postsDir+b).data.date.replace(/\//g,"");;
    return dateB - dateA;
  })
post.forEach(function(a){
    postNames.push(matter.read(postsDir+a).data.title);
    postDate.push(matter.read(postsDir+a).data.date);
})

Router
// The code below is so spaghetti. Sorry for that.
.get("/about", (req, res) => {
    res.render("blog/about")
})
.get("/", (req, res) => {
    res.render("blog/index", { postTitle: postNames, postDates: postDate });
})
.get("/posts", (req, res) => {
    res.render("blog/postList", { postTitle: postNames, postDates: postDate })
})
.get("/posts/:article", (req, res) => {
    let file = matter.read(postsDir+req.params.article+".md")
    let result = md.render(file.content);

    res.render("blog/article", {
        post: result,
        title: file.data.title,
        description: (!file.data.description) ? "No description." : file.data.description,
        author: (!file.data.author) ? "Unknown author": file.data.author,
        date: (!file.data.date) ? "Unknown date" : file.data.date
    });
})
module.exports = Router;