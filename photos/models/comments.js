var mongoose = require("mongoose");
var commentschema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "fuser"
        },
        username: String
    }

})
module.exports = mongoose.model("comment", commentschema);