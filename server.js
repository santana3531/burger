var express = require(express);
var bodyParser = require(body-parser);
var methodOverride = require(method-override);
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public"));

// make the app parse
app.use(bodyParser.urlencoded({ extended: false }));

// use the override with post
app.use(methodOverride("_method"));

// require the handlebars
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main "}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgersController.js")

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(PORT, function() {
	console.log("listening on port: %s", PORT);
});