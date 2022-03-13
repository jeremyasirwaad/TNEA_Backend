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
			password: req.body.password,
		},
		(err, user) => {
			if (err) {
				console.log(err);
				res.json({ status: false, error:err, message:"error" });
			} else {
				console.log(user);
				if (user == null) {
					res.json({ message: "Email Id or Password Invalid", status:false });
				} else {
					console.log(user);
					res.json({data:user, status:true});
				}
			}
		}
	);
});

module.exports = router;
