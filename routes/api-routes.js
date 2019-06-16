//Dependencies
var express = require("express");
var db = require("../config/config.json");
var models = require("../models");
//Express Routes
//============================
module.exports = app => {
  //============================================== Address Book Routes
  app.get("/api/AddressBook", (req, res) => {
    db.AddressBooks.findAll({}).then(dbAddressBook => {
      res.json(dbAddressBook);
    });
  });
  app.post("/api/create-location", (req, res) => {
    models.AddressBooks.create({
      custID: req.body.custID,
      country: req.body.country,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      zipcode: req.body.zipcode
    }).then(dbAddressBook => {
      res.redirect("/");
    });
  });

  // SHOW LIST OF SHIPMENTS
  app.get("/shipments", function(req, res, next) {
    req.getConnection(function(error, conn) {
      conn.query("SELECT * FROM shipments ORDER BY id DESC", function(
        err,
        rows,
        fields
      ) {
        res.render("shipments", {
          title: "Shipments",
          data: rows
        });
      });
    });
  });
  //deletes from the box size table at a specific id
  // app.delete("/api/box_sizes/:id", function(req,res){

  // });
  // //
  // //===============================================
  // //countries routes
  // app.get("/api/countries", function(req,res){

  // });
  // //posts to the countries table
  // app.post("/api/countries", function(req, res){

  // });
  // //deletes from the countries table at a specific id
  // app.delete("/api/countries/:id", function(req,res){

  // });
  //   //
  // //===============================================
  // //hazmat routes
  // app.get("/api/hazmat", function (req,res){

  // })
  // //posts to the hazmat route
  // app.post("/api/hazmat", function (req,res){

  // })
  // //deletes from the hazmat table at a specific id
  // app.delete("/api/hazmat/:id", function (req, res){

  // })
  // //updates the hazmat table at a specific id
  // app.put("api/hazmat/:id", function (req, res){

  // })
};
