require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./routes/routes");

const methodOverride = require("method-override");
const dbInitialSetup = require("./dbInitialSetup");

const port = 3000;

app.set("view engine", "ejs");

app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use("/users", routes);

// dbInitialSetup();

app.listen(port, () => {
    console.log(`http://localhost:${port} server listening on port ${port}`);
})