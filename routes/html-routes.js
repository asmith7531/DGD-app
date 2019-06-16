var express = require("express");
var db = require("../config/config.json");
var models = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Load addressbook page
  app.get("/addressbook", function(req, res) {
    let myContacts;
    models.AddressBooks.findAll({}).then(function(response) {
      console.log(response);
      myContacts = response[0].dataValues;
      console.log(myContacts);
      country = myContacts.country;
      console.log(country);
      address1 = myContacts.address1;
      address2 = myContacts.address2;
      city = myContacts.city;
      zipcode = myContacts.zipcode;
    });
    // myContacts.state = dataValues.AddressBooks.state;
    res.render("addressbook", myContacts);
  });
  app.get("/hazmat", function(req, res) {
    res.render("hazmat");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
