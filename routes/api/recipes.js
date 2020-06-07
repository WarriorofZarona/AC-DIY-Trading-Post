const router = require("express").Router();
const recipeController = require("../../controller/recipeController");

// Matches with "/api/books"
router.route("/")
    .get(recipeController.findAll)
    .post(recipeController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(recipeController.findById)
    .put(recipeController.update)
    .delete(recipeController.remove);

module.exports = router;
