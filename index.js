const express = require("express");
const app = express();
const port = Process.env.PORT || 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://jeremy:jeremy4755@cluster0.byg43.mongodb.net/TNEA?retryWrites=true&w=majority",
	() => {
		console.log("MongoDB connected");
	}
);

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", require("./Routes/user.routes"));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
