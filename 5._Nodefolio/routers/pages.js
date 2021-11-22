import express from "express";
const router = express.Router();
import { createPage } from '../render.js';
import path from "path";

// create html pages
const frontpagePage = createPage("frontpage/frontpage.html", {
    title: "Nodefolio | Welcome"
});

const projectsPage = createPage("projects/projects.html", {
    title: "Nodefolio | Projects"
});


// HTTP 
router.get("/", (req, res) => {
    res.send(frontpagePage)
});

router.get("/projects", (req, res) => {
    res.send(projectsPage)
});

export default router;
