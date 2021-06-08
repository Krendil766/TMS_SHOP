const Router = require("express");
const router = new Router();

const { viewController } = require("../controllers");
const personCheckMiddleware = require("../middleware/personCheckMiddleware");

router.post("/", personCheckMiddleware("ADMIN"), viewController.createElement);
router.get("/", viewController.getAllElements);
router.delete("/:id", personCheckMiddleware("ADMIN"), viewController.delOneElement);

module.exports = router;
