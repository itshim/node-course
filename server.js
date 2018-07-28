const express = require("express");
const fs = require("fs");
const hbs = require("hbs");
const path = require("path");

var app = express();

const PORT = process.env.PORT || 4000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getFullYear", () => new Date().getFullYear());
hbs.registerHelper("screamIt", text => text.toUpperCase());

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  let date = new Date().toString();
  let log = `${date}: ${req.method}: ${req.url}`;
  fs.appendFile("server.log", log + `\n`, err => {
    if (err) console.log(err);
  });
  next();
});

app.use((req, res) => {
  res.render("maintenance.hbs", {
    title: "Maintenance",
    welcome: "We will be right back"
  });
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    title: "Home",
    welcome: "Hello Andrew"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Bad Url"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
