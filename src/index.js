const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//check - /api/v1/ping to check server is running or not

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at port 8080`);
});
