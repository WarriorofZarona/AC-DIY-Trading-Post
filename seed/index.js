const seeder = require('mongoose-seed');
const data = require('./recipes.json')
const db = "mongodb://localhost:3001/acdiydb";

seeder.connect(db, () => {
    seeder.loadModels([
        "../models/recipe"
    ]);
    seeder.clearModels(['recipe']);
    seeder.populateModels(data, (err, done) => {
        if (err) {
            return console.log("seed err", err)
        }
        if (done) {
            return console.log("seed done", done)
        }
        seeder.disconnect();
    })

});