const { MANUFACTURER } = require('../models');

class ManufacturerController {
    async createElement(req, res) {
        const { name } = req.body;
        const manufacturer = await MANUFACTURER.create({ name });
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