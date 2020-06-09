const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    //Recipe name
    name: String,
    //Item image
    image: String,
    //Category it belongs to
    category: String,
    //Materials needed to craft
    materials: { type: String },
    //How to get it in-game
    source: [String],
    // Any miscellaneous note
    notes: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
