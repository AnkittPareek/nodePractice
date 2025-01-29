const express = require("express");

const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");

const app = express();

app.use(homeRouter, aboutRouter);

app.use("/", (req, res, next) => {
  res.send(`<h1>404 Not Found</h1>`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
