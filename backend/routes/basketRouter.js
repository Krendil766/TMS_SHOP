const Router = require("express");
const router = new Router();

const { basketController } = require("../controllers");

router.post("/", basketController.createElement);
router.get("/", basketController.getAllElements);
router.delete("/:id", basketController.delOneElement);

module.exports = router;
