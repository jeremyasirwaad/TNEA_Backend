const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://jeremy:jeremy4755@cluster0.byg43.mongodb.net/TNEA?retryWrites=true&w=majority",() => {
    console.log("MongoDB connected");
})

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

app.use('/',require('./Routes/user.routes'))


app.listen(port, () => {
    console.log("Post Running on " + port );
})