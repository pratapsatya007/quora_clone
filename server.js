//require our packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const ejs = require("ejs");

//require router routes
const authRoute = require("./routes/auth");

//setupp application
const app = express();

//setupp view engine EJS, body-
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username is provided
  if (!username) {
    return res.status(400).json({ error: "No username was given" });
  }
  if (!password) {
    return res.status(400).json({ error: "No password was given" });
  }
  // If the username is provided and valid, continue with the registration process
  // Send a success response
});

//setup session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
console.log(process.env.SECRET);
//initialize passport
app.use(passport.initialize());
//use passport to deal with session

app.use(passport.session());

//connecting to DB
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("db connect success"))
  .catch((err) => console.log("db connect error", err));

app.get("/", (req, res) => {
  res.render("index"); // note that by default the views folder is considered
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/notifications", (req, res) => {
  res.render("notifications");
});
app.get("/quora5914.jpg", (req, res) => {
  res.sendFile(__dirname + "/quora5914.jpg");
});
app.get("/ask.png", (req, res) => {
  res.sendFile(__dirname + "/ask.png");
});

app.get("/answer.png", (req, res) => {
  res.sendFile(__dirname + "/answer.png");
});
app.get("/answers.png", (req, res) => {
  res.sendFile(__dirname + "/answers.png");
});
app.get("/home.png", (req, res) => {
  res.sendFile(__dirname + "/home.png");
});
app.get("/notifications.png", (req, res) => {
  res.sendFile(__dirname + "/notifications.png");
});
app.get("/notify-img.png", (req, res) => {
  res.sendFile(__dirname + "/notify-img.png");
});
app.get("/post.png", (req, res) => {
  res.sendFile(__dirname + "/post.png");
});
app.get("/spaces.png", (req, res) => {
  res.sendFile(__dirname + "/spaces.png");
});
app.get("/imgf.png", (req, res) => {
  res.sendFile(__dirname + "/imgf.png");
});

//use auth routes
app.use("/", authRoute);
app.listen(process.env.PORT, () => {
  console.log("server on port", process.env.PORT);
});
