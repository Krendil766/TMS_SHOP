const uuid = require("uuid");
const path = require("path");

const { VIEW } = require('../models');

class ViewController {
    async createElement(req, res) {
        let { name } = req.body;

        const { img } = req.files;
        const fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, "..", "public", fileName));

        const view = await VIEW.create({ name, img: fileName });
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
        views.splice(id - 1, 1)
        return res.json(views);
    }
}

module.exports = new ViewController();