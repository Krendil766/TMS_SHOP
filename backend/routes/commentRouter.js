const Router = require("express");
const router = new Router();

const { commentController } = require("../controllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, commentController.createElement);
router.get("/", commentController.getAllElements);
router.delete("/:id", authMiddleware, commentController.delOneElement);

module.exports = router;
