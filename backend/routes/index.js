const Router = require("express");
const router = new Router();

const viewRouter = require("./viewRouter");
const manufacturerRouter = require("./manufacturerRouter");
const commentRouter = require("./commentRouter");
const basketRouter = require("./basketRouter");
const ratingRouter = require("./ratingRouter");
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");



router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/view", viewRouter);
router.use("/manufacturer", manufacturerRouter);
router.use("/comment", commentRouter);
router.use("/basket", basketRouter);
router.use("/rating", basketRouter);

module.exports = router;
