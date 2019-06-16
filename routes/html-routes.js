var db = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Load addressbook page
  app.get("/addressbook", function(req, res) {
    res.render("add-contact");
  });

  app.get("/shipments", function(req, res) {
    res.render("shipments");
  });

  // SHOW LIST OF SHIPMENTS
  app.get("/shipments", function(req, res, next) {
    req.getConnection(function(error, conn) {
      conn.query("SELECT * FROM shipments", function(err, rows, fields) {
        res.render("shipments", {
          title: "Shipments",
          data: rows
        });
      });
    });
  });
  // // Load home page
  // app.get("/home", function(req, res) {
  //   res.render("index");
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
