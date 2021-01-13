const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const authController = require("../../controllers/authController");

// // Matches with "/api/users"
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);

// // Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

// Matches with '/api/users/register'
router.route("/register")
.post(authController.register);

// Matches with '/api/users/login'
router.route("/login")
.post(authController.login)



module.exports = router;