var mongoose = require("mongoose")

var albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    created_date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("album", albumSchema);