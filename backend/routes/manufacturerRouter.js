const Router = require('express');
const router = new Router();

const { manufacturerController } = require('../controllers');

router.post('/', manufacturerController.createElement);
router.get('/', manufacturerController.getAllElements);
router.delete('/', manufacturerController.delOneElement);

module.exports = router;