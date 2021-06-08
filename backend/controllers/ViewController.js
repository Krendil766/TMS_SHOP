const { VIEW } = require('../models');

class ViewController {
    async createElement(req, res) {
        let { name } = req.body;
        const view = await VIEW.create({ name });
        return res.json(view);
    }
    async getAllElements(req, res) {
        const views = await VIEW.findAll();
        return res.json(views);
    }
    async delOneElement(req, res) {
        let { id } = req.params
        const views = await VIEW.findAll();
        if (!id) {
            throw new Error('Нет такого типа товара!!!')
        }
        views.splice(id-1,1)
        return res.json(views);
    }
}

module.exports = new ViewController();