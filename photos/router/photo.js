var express = require("express")
var router = express.Router();
var controllers = require("../controllers/photo")
var middleware = require("../middlewares/index")

//display all users
router.get("/", middleware.isLoggedIn, controllers.allUser)

//display user photos
router.get("/user/:id/photo", middleware.isLoggedIn, controllers.userPhotos)

//add new photo
router.get("/photo/add", middleware.isLoggedIn, controllers.newPhoto)

//Delete photo
router.post("/photo", middleware.isLoggedIn, controllers.createPhotos)

//Show more about photo
router.get("/photo/:id", middleware.isLoggedIn, controllers.showPhoto)

//Edit photo
router.get("/photo/:id/edit", middleware.isLoggedIn, controllers.editPhoto)

//Update photo
router.put("/photo/:id", middleware.isLoggedIn, controllers.updatePhoto)

//delete photo
router.delete("/photo/:id", middleware.isLoggedIn, controllers.deletePhoto)


module.exports = router