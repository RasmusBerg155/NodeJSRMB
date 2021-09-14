// const express = require("express");
// const app = express();
const app = require("express")();


// vi skal bruge app og sætte en GET request på, med vores index til "/" og en callbackfunction med request(req) og response(res) indeni.
app.get("/", (req, res) => {
    res.send({ });
});

// createa a new route on the endpoint "/adventureTime"
// send back data (data type must be json)

app.get("/adventureTime", (req, res) => {
    res.send({
        adventurer: "Barbarian", 
        name : "ClausTheBarb",
        weapons : "Swords",
        follower : {
            adventurer: "Warrior",
            name : "Brienne of Tarth",
            weapons : "Two-handed Sword"
        }});
});

// Vi kan sende data med Get path variable eller query variable

// nu kan vi med vores query string sende et svar og værdien tilbage
// http://localhost:3000/senddata?key=value&name=Tobias&svar=Godt&nicenesslevel=10
// Her sender vi svar og dens value tilbage
app.get("/senddata", (req, res) => {
    console.log(req.query.svar);
    res.send({ svar : req.query.svar });
});

// create a route on favoriteNumber that through
// request parameter gets the number and sends it back to the client
// bonus: tells the client if it's a nice number or not


app.get("/favoriteNumber/:number", (req, res) => {
    //console.log()
    res.send({
        number: req.params.number,
        nice: req.params.number < 5 
    });
});

app.listen(3000);
