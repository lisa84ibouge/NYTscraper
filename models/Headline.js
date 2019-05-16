var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var headlineSchema = new Schema ({
    headline: {
        type: String, 
        required: true, 
        unique: true
    }, 
    summary: {
        type: String, 
        required: true
    }, 
    url: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        required: true
    }
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;