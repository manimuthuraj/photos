var express = require("express")
var router = express.Router();
var controllers = require("../controllers/auth")

router.get("/register", controllers.userRegister)

//Create new user
router.post("/register", controllers.createUser)

//Display Login form
router.get("/login", controllers.loginForm)

//Login user
router.post("/login", controllers.loginUser)

//Logout user
router.get("/logout", controllers.logoutUser)

module.exports = router