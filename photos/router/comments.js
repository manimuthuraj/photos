var express = require("express")
var router = express.Router();
var controllers = require("../controllers/comment")
var middleware = require("../middlewares/index")

//add new comment
router.get("/photo/:id/comments/new", middleware.isLoggedIn, controllers.addComment)

//create comment
router.post("/photo/:id/comments", middleware.isLoggedIn, controllers.createComment)


module.exports = router;