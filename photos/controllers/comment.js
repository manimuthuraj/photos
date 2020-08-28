var express = require("express")
const comment = require("../models/comments");
var photo = require("../models/photo");
const { create } = require("../models/photo");

var addComment = async function(req, res) {
    try {
        var getPhoto = await photo.findById(req.params.id)
        res.render("comment/new", { photo: getPhoto })
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}


var createComment = async function(req, res) {
    try {
        var createComment = await comment.create({ text: req.body.text, author: { id: req.user._id, username: req.user.username } })
        var photos = await photo.findByIdAndUpdate(req.params.id, { $push: { comments: createComment } })
        res.redirect("/photo/" + req.params.id)
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}


module.exports = { addComment, createComment }