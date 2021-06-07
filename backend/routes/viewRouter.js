const Router = require('express');
const router = new Router();

const {viewController} = require('../controllers');


router.post('/', viewController.createElement)
router.get('/', viewController.getAllElements)
router.delete('/:id', viewController.delOneElement)

module.exports = router;