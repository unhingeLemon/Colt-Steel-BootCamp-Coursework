var express = require("express");
var app = express();
var port = 3000;


app.get("/:verb",(req,res)=>{
    var verb = req.params.verb
    res.render("home.ejs",{verb:verb});
});


app.listen(port,()=>{
    console.log("We are listening to port " + port);
});
