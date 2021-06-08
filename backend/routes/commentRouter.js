const Router = require("express");
const router = new Router();

const { commentController } = require("../controllers");

router.post("/", commentController.createElement);
router.get("/", commentController.getAllElements);
router.delete("/:id", commentController.delOneElement);

module.exports = router;
