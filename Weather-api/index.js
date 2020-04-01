const express = require("express");
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser')
const weatherRouter = require('./src/router/weatherRouter')
const port = process.env.PORT || 3258;
app.use(cors())

app.use(bodyParser.json())
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api", (req, res) => {
  res.send({ message: "Up and running" });
});
app.use("/api/weather", weatherRouter);
app.listen(port, () =>
  console.log(`Weather app listening on port http://localhost:${port}!`)
);
