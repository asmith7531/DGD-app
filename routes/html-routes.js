var express = require("express");
var db = require("../config/config.json");
var models = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Load addressbook page and get all of the addresses
  app.get("/addressbook", function(req, res) {
    models.AddressBooks.findAll({}).then(function(response) {
      console.log(response)
      res.render("addressbook",{AddressBooks:response});
    });
    // myContacts.state = dataValues.AddressBooks.state;
  });
  app.get("/hazmat", function(req, res) {
    models.hazmats.findAll({}).then(response => {
      res.render("hazmat",{hazmats:response});
    })
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
