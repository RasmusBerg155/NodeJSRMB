const express = require("express");
const app = express();

const dankMemes = [{
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}];

app.get("/dankMemes", (req, res) => {
    res.send({ memes : dankMemes});
});



app.listen(3000);