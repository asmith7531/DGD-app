var express = require("express");
var db = require("../config/config.json");
var models = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/home", function(req, res) {
    models.AddressBooks.findAll({}).then(function(addresses) {
      models.Hazmats.findAll({}).then(response => {
        res.render("home", { Hazmats: response, AddressBooks: addresses });
      });
    });
  });
  // Load addressbook page and get all of the addresses
  app.get("/addressbook", function(req, res) {
    models.AddressBooks.findAll({}).then(function(response) {
      res.render("addressbook", { AddressBooks: response });
    });
  });
  app.get("/hazmat", function(req, res) {
    models.Hazmats.findAll({}).then(response => {
      res.render("hazmat", { Hazmats: response });
    });
  });
  //route to render the refereces page
  app.get("/references", function(req, res) {
    res.render("references");
  });
    //route to render the refereces page
    app.get("/shipments", function(req, res) {
      res.render("shipments");
    });
  //this route renders the home page
  app.get("/home", function(req, res) {
    res.render("home");
  });
  app.get("/", function(req, res) {
    res.render("login");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
