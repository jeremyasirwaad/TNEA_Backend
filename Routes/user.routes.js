const mongoose = require("mongoose");
const express = require("express");
const User = require("../model/user.model");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("API is working");
});

router.post("/signup", (req, res) => {
	User.findOne(
		{ email: req.body.email, password: req.body.password },
		(err, user) => {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				if (user == null) {
					const user = new User({
						email: req.body.email,
						password: req.body.password,
					});
					user.save().then((err) => {
						if (err) {
							console.log(err);
							res.json(err);
						} else {
							console.log(user);
							res.json(user);
						}
					});
				} else {
					res.json({
						message: "Email Already In Use, Try Logging In",
					});
				}
			}
		}
	);
});

router.post("/login", (req, res) => {
	User.findOne(
		{
			email: req.body.email,
		},
		(err, user) => {
			if (err) {
				console.log(err);
				res.json({ status: false, error: err, message: "error" });
			} else {
				console.log(user);
				if (user == null) {
					res.json({ message: "Invalid Email or Password", status: false });
				} else {
					let buff = Buffer.from(user.password, "base64");
					let text = buff.toString("ascii");
					console.log(text,req.body.password);
					if (
						req.body.password === text
					) {
						console.log(user);
						res.json({ data: user, status: true });
					} else{
						res.json({message:"Invaild Email or Password", status: false})
					}
					// let data = "MTIzNDU2";
					
				}
			}
		}
	);
});

router.post("/checkemail", (req, res) => {
	User.findOne(
		{
			email: req.body.email,
		},
		(err, user) => {
			if (err) {
				console.log(err);
				res.json({ status: false, error: err, message: "Error" });
			} else {
				if (user == null) {
					res.json({ message: "Email Id not resgistered", status: false });
				} else {
					res.json({ status: true });
				}
			}
		}
	);
});

router.post("/getinfoemail", (req, res) => {
	User.findOne(
		{
			email: req.body.email,
		},
		(err, user) => {
			if (err) {
				console.log(err);
				res.json({ status: false, error: err, message: "Error" });
			} else {
				if (user == null) {
					res.json({ message: "Email Id not resgistered", status: false });
				} else {
					// res.json({ status: true, data: user });
					// let data = "c3RhY2thYnVzZS5jb20=";
					// let buff = new Buffer(data, "base64");
					// let text = buff.toString("ascii");
					// console.log(
					// 	'"' + data + '" converted from Base64 to ASCII is "' + text + '"'
					// );
				}
			}
		}
	);
});

module.exports = router;
