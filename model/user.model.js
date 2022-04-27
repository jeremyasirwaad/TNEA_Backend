const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newScheme = new Schema({
	_id: {
		$oid: {
			type: "ObjectId",
		},
	},
	email: {
		type: "String",
	},
	password: {
		type: "String",
	},
	data: {
		type: "String",
	},
	__v: {
		type: "Date",
	},
	cutoff: {
		$numberDouble: {
			type: "String",
		},
	},
	name: {
		type: "String",
	},
	phone: {
		type: "String",
	},
	s12regno: {
		$numberInt: {
			type: "String",
		},
	},
	appno: {
		$numberInt: {
			type: "Date",
		},
	},
	s12rollno: {
		$numberInt: {
			type: "String",
		},
	},
	Groupcode: {
		$numberInt: {
			type: "Date",
		},
	},
	Nativity: {
		type: "String",
	},
	adharno: {
		$numberLong: {
			type: "String",
		},
	},
	coff: {
		$numberDouble: {
			type: "Date",
		},
	},
	comunity: {
		type: "String",
	},
	exser: {
		type: "Boolean",
	},
	pchalage: {
		type: "Boolean",
	},
	rank: {
		$numberInt: {
			type: "Date",
		},
	},
	s1: {
		$numberDouble: {
			type: "String",
		},
	},
	s2: {
		$numberDouble: {
			type: "String",
		},
	},
	s3: {
		$numberDouble: {
			type: "String",
		},
	},
	sport: {
		type: "Boolean",
	},
	studgovt: {
		type: "Boolean",
	},
});

module.exports = mongoose.model("User", newScheme);
