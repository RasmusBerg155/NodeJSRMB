const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index/index.html');    
});

app.get("/d2r", (req, res) => {
    res.sendFile(__dirname + '/public/d2r/d2r.html');    
});

// create a new file called teenageroom.html
// serve /tenageroom
// use dynamic client-side redirection to redirect after 3 seconds

app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + '/public/teenageroom/teenageroom.html');
});

app.get("/creditor", (req, res) => {
    res.send( { message: "You are indebted and you won't get what you want. "} );
});

app.get("/sausage", (req, res) => {
    if (Number(req.query.money) <= 22) {
        res.redirect("/creditor");
    } else {
        res.redirect("Indianer i svøb");
    };
});


console.log(process.env.PORT);

// task allow the developer setting the port
// task start-dev should run on port 8080

const PORT = process.env.PORT || 8080;

app.listen (PORT, (error) => {
    if (error) {
        console.log(error);
    };
    console.log("Server is running on port:", PORT);
});