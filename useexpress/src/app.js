const express = require("express");
const app = express();
const path = require("path");

// console.log(path.join(__dirname, "../demos"));

const myPaths = path.join(__dirname, "../demos");

app.use(express.static(myPaths));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(5000, () => {
  console.log("listening to port 5000");
});
