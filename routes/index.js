const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(res.locals.success_msg);
  res.render("welcome");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
