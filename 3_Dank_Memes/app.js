const express = require("express");
const app = express();

app.use(express.json());

let dankMemes = [{
    id: 1,
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}];

let AUTO_INCREMENT = 1;


app.get("/dankmemes", (req, res) => {
    res.send({ memes: dankMemes });
});

app.get("/dankmemes/:id", (req, res) => {
    const foundMeme = dankMemes.find(dankMeme => dankMeme.id === Number(req.params.id));
    return foundMeme;
});

app.post("/dankmemes", (req, res) => {
    const dankMeme = req.body;
    dankMeme.id = ++AUTO_INCREMENT;
    dankMemes.push(dankMeme);
    res.send(req.body);
});

// todo patch

app.patch("/dankmemes/:id", (req, res) => {
    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.id === Number(req.params.id)){
            memeToUpdate =  { ...dankMeme, ...req.bodu, id: dankMeme.id };
            return memeToUpdate;
        };
        return dankMeme;
    });
    memeToUpdate ? res.send(memeToUpdate): res.sendStatus(404);
});


app.delete("/dankmemes/:id", (req, res) => {
    let foundMemeToDelete = false;
    dankMemes = dankMemes.filter(dankMeme => {
        const notToDelete = dankMeme.id !== Number(req.params.id);
        if (!notToDelete) foundMemeToDelete = true;
        return notToDelete;
    });
    foundMemeToDelete ? res.sendStatus(200) : res.sendStatus(404);
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on port", 8080);
});