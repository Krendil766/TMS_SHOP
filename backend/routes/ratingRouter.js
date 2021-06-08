const Router = require("express");
const router = new Router();

const { ratingController } = require("../controllers");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/",authMiddleware, ratingController.createElement);
router.get("/", ratingController.getAllElements);
router.delete("/:id",authMiddleware, ratingController.delOneElement);

module.exports = router;
