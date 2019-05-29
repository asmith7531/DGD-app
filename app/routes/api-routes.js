//Dependencies
//=============================
var db = require("../models");
//Express Routes
//============================
module.exports = function(app){
  //
  //==============================================
  //gets the box sizes 
  app.get("/api/box_sizes", function (req, res){

  });
  //posts to box sizes table
  app.post("/api/box_sizes", function(req,res){
    
  });
  //deletes from the box size table at a specific id
  app.delete("/api/box_sizes/:id", function(req,res){

  });
  //
  //===============================================
  //countries routes 
  app.get("/api/countries", function(req,res){

  });
  //posts to the countries table
  app.post("/api/countries", function(req, res){

  });
  //deletes from the countries table at a specific id
  app.delete("/api/countries/:id", function(req,res){
    
  });
    //
  //===============================================
  //hazmat routes
  app.get("/api/hazmat", function (req,res){

  })
  //posts to the hazmat route
  app.post("/api/hazmat", function (req,res){

  })
  //deletes from the hazmat table at a specific id
  app.delete("/api/hazmat/:id", function (req, res){

  })
  //updates the hazmat table at a specific id
  app.put("api/hazmat/:id", function (req, res){

  }) 
}