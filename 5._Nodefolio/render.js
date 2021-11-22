const fs = require("fs");

const navbar = fs.readFileSync("./public/components/navbar/navbar.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

function createPage(path, options) {
    return (navbar + fs.readFileSync(`./public/pages/${path}`, "utf8") + footer)
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
            .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "");
}

module.exports = {
    createPage
};