const { TYPE } = require('../models');
const ErrorHandler = require('../utils/errorHandler');


class TypeController {
    async createElement(req, res) {
        const { name } = req.body;
        const type = await TYPE.create({ name });
        return res.json(type);
    }
    async getElement(req, res) {
        const types = await TYPE.findALL();
        return res.json(types);
    }
}

module.exports = new TypeController();