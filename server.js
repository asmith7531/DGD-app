//server dependencies
var express = require("express");

//setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./app/models");

//settign up the express app to use data parsing 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//letting the express app serve static files
app.use(express.static("./app/public"));

require('./app/routes/api-routes')(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});