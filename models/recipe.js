const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
    //Recipe name
    name: {
        type: String,
        required: true
    },
    //Item image
    image: {
        type: String,
        required: true
    },
    //Category it belongs to
    category: {
        type: String,
        required: true
    },
    //Materials needed to craft
    materials: Schema.Types.Mixed,
    //How to get it in-game
    source: Schema.Types.Mixed,

    // Any miscellaneous note
    notes: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
