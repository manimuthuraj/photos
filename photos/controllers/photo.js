var express = require("express")
var photo = require("../models/photo");
const fuser = require("../models/fuser");
// var comment = require("../models/comments")

var allUser = async function(req, res) {
    try {
        var user = await fuser.find({})
        res.render("home", { user: user })
    } catch (e) {
        console.log(e)
    }
}


var userPhotos = async function(req, res) {
    try {
        var user = await fuser.findById(req.params.id)
        var photos = await photo.find({ "author.id": req.params.id })
        res.render("photos/photo", { photos: photos, user: user })
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}

var newPhoto = function(req, res) {
    res.render("photos/newPhoto")
}

var createPhotos = async function(req, res) {
    try {
        var photos = { title: req.body.name, image: req.body.image, description: req.body.description, author: { id: req.user._id, username: req.user.username } }
        var createPhoto = await photo.create(photos)
        res.redirect("/")
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}

var showPhoto = function(req, res) {
    photo.findById(req.params.id).populate("comments").exec(function(err, found) {
        if (err) {
            console.log(err)
        } else {
            res.render("photos/show", { photos: found })
        }
    })
}

var editPhoto = async function(req, res) {
    try {
        var photos = await photo.findById(req.params.id)
        res.render("photos/editPhoto", { photos: photos })
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}

var updatePhoto = async function(req, res) {
    try {
        var photos = { title: req.body.name, image: req.body.image, description: req.body.description }
        var updatePhoto = await photo.findByIdAndUpdate(req.params.id, photos)
        res.redirect("/photo/" + req.params.id)
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}

var deletePhoto = async function(req, res) {
    try {
        var photos = await photo.findByIdAndRemove(req.params.id)
        res.redirect("/")
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
}


module.exports = { allUser, userPhotos, newPhoto, createPhotos, showPhoto, editPhoto, updatePhoto, deletePhoto }