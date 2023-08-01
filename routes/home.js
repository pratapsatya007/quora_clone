//require express router
const router = require("express").Router();
// // require Quote Model
// const Quote = require("../models/Quote");

//create routes
//get home
router.get("/", (req, res) => {
  I; //Lets check if user Logged in? then the access to this route will be redirected to this quotes page automatically
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    res.render("/index");
  }
});

// get register
router.get("/signup", (req, res) => {
  I; //Lets check if user Logged in? then the access to this route will be redirected to this quotes page automatically
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    res.render("/signup");
  }
});

//login page
// router.get("/", (req, res) => {
//   I; //Lets check if user Logged in? then the access to this route will be redirected to this quotes page automatically
//   if (req.isAuthenticated()) {
//     res.redirect("/home");
//   } else {
//     res.render("/index");
//   }
// });

// get quotes page (fetch data from db and send to quotes page)
router.get("/quote", async (req, res) => {
  try {
    //fetch all quotes from db
    const allQuotes = await Quote.find();
    res.render("quotes", { allQuotes, isAuth: req.isAuthenticated() });
    console.log(req.isAuthenticated());
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
