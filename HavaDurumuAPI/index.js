const express = require('express');
const https = require('https');
const app = express();


app.get("/", function (req, res) {

    let link = "https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=800a206ea1635d9db079b7ba31d9f1d5&lang=tr";

    https.get(link, function (res) {
        console.log(res.statusCode);

        res.on("data", function (gelenData) {
            let havaDurumu = JSON.parse(gelenData);

            console.log("Angara hava sicakligi:", ((havaDurumu.main.temp)-273).toFixed(1), "°C ve", havaDurumu.weather[0].main);
        })
    })
})







app.listen(5000);