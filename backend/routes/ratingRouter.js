const Router = require("express");
const router = new Router();

const { ratingController } = require("../controllers");

router.post("/", ratingController.createElement);
router.get("/", ratingController.getAllElements);
router.delete("/:id", ratingController.delOneElement);

module.exports = router;
