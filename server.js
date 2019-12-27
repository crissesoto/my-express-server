const express = require("express");
const app = express();
const port = 3000;

// Home Page
app.get("/", function(req, res) {
  //console.log(request);
  res.send("<h1>Hello There!</h1>");
});

// Contact Page
app.get("/contact", function(req, res) {
  //console.log(request);
  res.send("<h2>Contact me at:</h2><p>soto.crisse@hotmail.com</p>");
});

// About Me Page
app.get("/about", function(req, res) {
  //console.log(request);
  res.send("<h2>About Me</h2><p>I'm a Web developer.</p>");
});

// Services Page
app.get("/services", function(req, res) {
  //console.log(request);
  res.send(
    "<h2>My Services </h2><p>UX & UI</p><p>Web development</p><p>Prototype</p>"
  );
});

// start server port
app.listen(port, function() {
  console.log(`server started at poort: ${port}`);
});
