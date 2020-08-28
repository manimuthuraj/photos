var express = require("express")
var app = express()
var bodyp = require("body-parser")
app.use(bodyp.urlencoded({ extended: true }));
var methodOverride = require("method-override")
app.use(methodOverride("_method"))
require("dotenv").config()


app.set("view engine", "ejs")

require("./config/dbconnection")

var authRoute = require("./router/auth")
var photoRoute = require("./router/photo")
var commentRoute = require("./router/comments")

//passport configuration
require("./config/passportconfig")(app)

app.use(authRoute)
app.use(photoRoute)
app.use(commentRoute)

app.listen(3000, function() {
    console.log("started")
})