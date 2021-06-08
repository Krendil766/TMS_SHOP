const Router = require("express");
const router = new Router();

const { deviceController } = require("../controllers");
const personCheckMiddleware = require("../middleware/personCheckMiddleware");

router.post("/",personCheckMiddleware("ADMIN"), deviceController.createElement);
router.get("/", deviceController.getAllElements);
router.get("/:id", deviceController.getOneElements);
router.delete("/:id",personCheckMiddleware("ADMIN"), deviceController.delOneElement);

module.exports = router;
