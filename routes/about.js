const express = require("express");

const router = express.Router();

router.get("/about", (req, res) => {
  res.send(`<h1>this is about page</h1>`);
});

module.exports = router;
