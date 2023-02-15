/*
visit this page to work:
https://Cylinder-Calculator-Swanzy.pswanzy.repl.co/VolCalc
*/
const express = require("express");
const app = express();
const port = 3000; //listen to port#

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); //post nested objects

app.get("/VolCalc", function(req, res) {
  res.sendFile(__dirname + "/VolCalculator.html"); //local dir name + append
});
app.post("/VolCalc", function(req, res) {
  var pi = Math.PI;
  var radius = parseFloat(req.body.radius); //convert to float
  radius = Math.pow(radius, 3);
  var volCalc = pi * radius * (4 / 3);
  res.send("The sphere volume is: " + volCalc.toFixed(2) + " cubic units."); //display 2 dec
});
app.listen(port, function() {
  console.log("Server is running...run Forrest RUN!");
});
/*

    Based on the code from BMI Calculator, write a simple web page to compute the volume of a cylinder - pi*(r^2)*h
    The Web Form, with title Volume Cylinder, should have a GET method to accept two field entries for radius and height
    The Web Form should have a POST method using a Calculate button, that calculates the volume and displays as a field on the web page
    Use the formula for computation of volume = pi*(r^2)*h and display the volume on a separate page, as number formatted to 2 decimal places
    Ensure that you use Express, use /VolCalc as path, a file called index.js as the main js file, VolCalculator.html as the html display page 
    Use the JavaScript Math.PI function to determine value of pi and use the Math.pow to raise the value of r to the power of 2
    Refer to W3Schools Javascript for sample code - https://www.w3schools.com/js/js_math.asp
    Create your entire code in Repl.it and post your Repl.It URL in Laulima Dropbox 
*/