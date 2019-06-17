//Dependencies
var express = require("express");
var db = require("../config/config.json");
var models = require("../models");
//Express Routes
//============================
module.exports = app => {
  //============================================== Address Book Routes
  app.get("/api/addressbook", (req, res) => {
    models.AddressBooks.findAll({}).then(function(response) {
      console.log(response);
    });
  });

  app.get("/api/addressbook/:id", (req, res) => {
    models.AddressBooks.findOne({
      where: {
        id: id
      }
    }).then(response => {
      res.json(response);
    });
  });
  //add new contact
  app.post("/api/create-location", (req, res) => {
    models.AddressBooks.create({
      custID: req.body.custID,
      country: req.body.country,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      zipcode: req.body.zipcode
    }).then(dbAddressBook => {
      res.redirect("/addressbook");
    });
  });
  //create new hazmat
  app.post("/api/create-hazmat", (req, res) => {
    models.hazmats.create({
        unNum: req.body.unNum,
        name: req.body.name,
        class: req.body.class,
        pg: req.body.pg,
        packingInst: req.body.packingInst,
        packingInstCAO: req.body.packingInstCAO
      })
      .then(response => {
        res.redirect("/hazmat");
      });
  });
  app.delete("/api/delete-hazmat/:id", (req, res) => {
    models.hazmats.destroy({
        where: {
          id: id
        }
      })
      .then(response => {
        res.json(response);
        res.redirect("/hazmat")
      });
  });
  app.delete("/api/delete-address/:id", (req, res) => {
    models.AddressBooks.destroy({
        where: {
          id: id
        }
      })
      .then(response => {
        res.json(response);
        res.redirect("addressbooks")
      });
  });
  app.post("/api/create-order", (req, res) => {
    models.AddressBooks.create({
      date: req.body.date,
      orderNum: req.body.orderNum,
      lotNum: req.body.lotNum,
      bottles: req.body.bottles,
      boxSize: req.body.boxSize,
      hazmat: req.body.hazmat
    }).then(dbAddressBook => {
      res.redirect("home");
    });
  });
  app.get("/api/orders", (req, res) => {
    models.orders.findAll({}).then(response => {
      console.log(response);
      res.json(response);
    });
  });
};
