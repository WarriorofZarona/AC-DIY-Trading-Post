const seeder = require('mongoose-seed');
const recipes = require('./recipes.json')
const db = "mongodb://localhost/acdiydb";

const data = recipes.map(recipe => {
    return {
        name: recipe.name,
        image: recipe.image,
        category: recipe.category,
        materials: recipe.materials,
        source: recipe.source,
        notes: recipe.sourceNotes
    }
})

seeder.connect(db, () => {
    seeder.loadModels([
        "./models/recipe.js"
    ]);
    seeder.clearModels(['Recipe'], () => {
        seeder.populateModels(data, (err, done) => {
            if (err) {
                return console.log("seed err", err)
            }
            if (done) {
                return console.log("seed done", done)
            }
            seeder.setLogOutput(logOutput)
            seeder.disconnect();
        })
    })

});