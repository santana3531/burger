var express = require(express);
var burger = require("../models/burgers.js");
var router = express.Router();

// route it to the burgers

router.get("/", function(req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	burger.selectAll(function(burgerData) {
		res.render("index", { burger_data: burgerData });
	});
});


// post route for index's
// grab the object and input for the burgers then console log and render it back
router.post("/burger/create", function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

// now do the same for the put route for index's

router.put("/burger/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;