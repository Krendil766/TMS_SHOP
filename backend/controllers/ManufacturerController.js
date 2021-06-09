const uuid = require("uuid");
const path = require("path");

const { MANUFACTURER } = require('../models');

class ManufacturerController {
    async createElement(req, res) {
        const { name } = req.body;

        const { img } = req.files;
        const fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, "..", "public", fileName));

        const manufacturer = await MANUFACTURER.create({ name, img: fileName });
        return res.json(manufacturer)
    }

    async getAllElements(req, res) {
        const manufacturers = await MANUFACTURER.findAll();
        return res.json(manufacturers);
    }
    async delOneElement(req, res) {
        const { id } = req.params;
        const manufacturer = await MANUFACTURER.findAll()
        if (!id) {
            throw new Error('Нет такого производителя')
        }
        return res.json(manufacturer.splice(id - 1, 1))
    }
}

module.exports = new ManufacturerController();