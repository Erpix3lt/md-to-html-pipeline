const express = require("express"),
    contentRouter = require("./routers/content.js");

const application = express(),
    port = 6738,
    views = "./views/"

application
    .set("view engine", "ejs")
    .set("views", views)
    .use(express.static('./public'))
    .use("/blog", contentRouter);

application
    .get("/", (req, res) => {
        res.render("main")
    })

application
    .listen(port, () => 
        console.log(`The app is listening at: http://localhost:${port}`)
    );
