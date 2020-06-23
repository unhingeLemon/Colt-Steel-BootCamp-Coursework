let express = require("express");
let app = express();
let port = 3000;

app.get("/",(req,res) => {
    res.send("Welcome to my Assignment");
});

app.get("/speak/:sound",(req,res) => {
    let animal = req.params.sound.toLowerCase();
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meower"
    }
    res.send("The " + animal + " says " + sounds[animal]);
});
app.get("/repeat/:greet/:num",(req,res) => {
    let greet = req.params.greet;
    let num1 = Number(req.params.num);
    let response = "";
    for(var i = 0;i < num1;i++){
        response += greet + " ";
    }
    res.send(response);
});


app.get("*",(req,res)=>{
    res.send("Page not exist, What the hell are you doing with your LIFE!?");
})


app.listen(port,() =>{
    console.log("you are listening to port " + port);
})

