const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/folders"));

app.get("/", function (req, res) {
    res.render("index");
});


app.listen(5000);
