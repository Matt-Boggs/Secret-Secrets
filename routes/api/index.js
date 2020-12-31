const router = require("express").Router();
const userRoutes = require("./users");
const secretRoutes = require("./secrets");

router.use("/users", userRoutes);
router.use("/secrets", secretRoutes);

module.exports = router;
