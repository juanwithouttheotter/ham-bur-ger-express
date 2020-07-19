const express = require("express");
const exphbs = require("express-handlebars");
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = 8080;


app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes.route(app);


app.listen(PORT, () => { console.log("App listening on PORT: " + PORT) });