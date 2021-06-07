const Router = require('express');
const router = new Router();


const viewRouter = require('./viewRouter');
const manufacturerRouter = require('./manufacturerRouter');

router.use('/view', viewRouter);
router.use('/manufacturer', manufacturerRouter);

module.exports = router;