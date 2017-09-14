// write the functions to accept the inputs and return them to the database.

var connection = require("./connection.js");

function QuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// vals is the array that will save in the columns
	// cols are the columns is going to insert the values(vals) in
	create: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += QuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// update the obj cols and vals
	update: function(table, objColVals, condition, cb)	{
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;