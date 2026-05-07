const express = require('express');
const app = express();
// const fs = require("fs");

// res.render will serve files from the views/ directory
// app.set("view engine", "pug");
app.use(express.json());
//serve static files from public/ directory
app.use(express.static("public"));

//log all requests
app.use('/', (req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

//this route serves the home page
app.get("/", (req, res, next) => {
    if (req.accepts('text/html')){
        res.status(200).render("index");
    }else{
        res.status(406).send("Not Acceptable");
    }
});

app.listen(2406);
console.log("Server listening at http://localhost:2406");