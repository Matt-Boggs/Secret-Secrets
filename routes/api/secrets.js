const router = require("express").Router();
const secretsController = require("../../controllers/secretsController");

// Matches with "/api/secrets"
router.route("/")
  .get(secretsController.findAll)
  .post(secretsController.create);

// Matches with "/api/secrets/:id"
router
  .route("/:id")
  .get(secretsController.findById)
  .put(secretsController.update)
  .delete(secretsController.remove);

module.exports = router;
