const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/getTime", (req, res) => {
    const now = new Date();
    res.send({
        time : now
    });
});


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/getDay", (req, res) => {
    const date = new Date();
    //res.send({day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)});

    res.send({ day: days[date.getDay()] });
});



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on port", 8080);
});