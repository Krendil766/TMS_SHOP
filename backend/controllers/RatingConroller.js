const { RATING } = require("../models");

class RatingController {
  async createElement(req, res) {
    let { rating, userId, deviceId } = req.body;
    const rate = await RATING.create({ rating, userId, deviceId });
    return res.json(rate);
  }
  async getAllElements(req, res) {
    const rates = await RATING.findAll();
    return res.json(rates);
  }
  async delOneElement(req, res) {
    let { id } = req.params;
    const rates = await RATING.findAll();
    if (!id) {
      throw new Error("Нет такого товара с рейтингом!!!");
    }
    rates.splice(id - 1, 1);
    return res.json(rates);
  }
}

module.exports = new RatingController();
