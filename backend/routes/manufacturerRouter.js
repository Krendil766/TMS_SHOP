const Router = require("express");
const router = new Router();

const { manufacturerController } = require("../controllers");
const personCheckMiddleware = require("../middleware/personCheckMiddleware");

router.post("/", personCheckMiddleware("ADMIN"), manufacturerController.createElement);
router.get("/", manufacturerController.getAllElements);
router.delete("/", personCheckMiddleware("ADMIN"), manufacturerController.delOneElement);

module.exports = router;
