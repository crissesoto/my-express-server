const express = require("express");
const app = express();
const port = 3000;

// Home Page
app.get("/", function(req, res) {
  //console.log(request);
  res.send("<h1>Hello There!</h1>");
});

app.listen(port, function() {
  console.log(`server started at poort: ${port}`);
});
