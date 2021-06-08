const Router = require("express");
const router = new Router();

const { deviceController } = require("../controllers");

router.post("/", deviceController.createElement);
router.get("/", deviceController.getAllElements);
router.get("/:id", deviceController.getOneElements);
router.delete("/:id", deviceController.delOneElement);

module.exports = router;
