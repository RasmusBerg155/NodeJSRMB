const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pagesRouter = require("./routers/pages.js")

app.use(pagesRouter.router);

const { createPage } = require("./render.js");
const { urlencoded } = require("express");

const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome"
});

// const projectsPage = createPage("projects/projects.html");

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT)
})