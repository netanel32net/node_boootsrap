const express = require("express");
const PORT = process.env.PORT || 3000; // אם השרת אמיתי זה בוחר פורט לבד
const app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render("index", {message: "Hello there!" });
  });

  app.get('about', (req, res) => {
    res.render("about", {message: "Hello there!" });
  });



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
