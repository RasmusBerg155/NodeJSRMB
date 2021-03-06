const express = require("express");
const app = express();

app.use(express.static("public"));

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);

/* Read the HTML files */
const fs = require("fs");
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html", "utf8");


app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/pages/projects/projects.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
