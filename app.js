const express = require("express");
const PORT = process.env.PORT || 3000; // אם השרת אמיתי זה בוחר פורט לבד
const app = express();
let ejs = require('ejs');
const ArrayJson = require("./public/arrayPic");
const ArrayMoreJson = require("./public/arraymore")
app.set('view engine', 'ejs');


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render("index", {arrayejs: ArrayJson, carouselArray: ArrayMoreJson});
  });



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
