var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = ["Mark","Angelo"]

app.get("/",(req,res)=>{
    res.render("home");
    res.send("asdasdasdxczxceweqa");
});

app.get("/friends", (req,res)=>{
    res.render("friends", {friends:friends});
})

app.post("/addFriend",(req,res)=>{
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.listen(port,()=>{
    console.log("We are listening to http://localhost:3000/");
});
