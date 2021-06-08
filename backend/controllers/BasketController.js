const { BASKET } = require("../models");

class BasketController {
  async createElement(req, res) {
    let { name, userId } = req.body;
    const basket = await BASKET.create({ name, userId });
    return res.json(basket);
  }
  async getAllElements(req, res) {
    const baskets = await BASKET.findAll();
    return res.json(baskets);
  }
  async delOneElement(req, res) {
    let { id } = req.params;
    const baskets = await BASKET.findAll();
    if (!id) {
      throw new Error("Нет такого товара в корзине!!!");
    }
    baskets.splice(id - 1, 1);
    return res.json(baskets);
  }
}

module.exports = new BasketController();
