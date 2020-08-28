var fuser = require("../models/fuser")
var bcrypt = require("bcryptjs")
var passport = require("passport")

var userRegister = function(req, res) {
    res.render("auth/register")
}

//Create new user
var createUser = async function(req, res) {
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, 10) //Hasing password
        var user = { username: req.body.username, password: hashedPassword, email: req.body.email }
        var createUser = await fuser.create(user)
        console.log(createUser)
        req.flash("error", "Now please Login")
        res.redirect("/login")
    } catch (e) {
        console.log(e)
        req.flash("error", "Some Thing went wrong please try again or use differnt name")
        res.redirect("/register")
    }
}

//Display Login form
var loginForm = function(req, res) {
    res.render("auth/login")
}

//Login user
var loginUser = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
})

//Logout user
var logoutUser = function(req, res) {
    req.logout();
    req.flash("error", "Loged Out successfully")
    res.redirect("/login")
}


module.exports = { createUser, userRegister, loginForm, logoutUser, loginUser }