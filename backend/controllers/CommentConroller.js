const { COMMENT } = require("../models");

class CommentController {
  async createElement(req, res) {
    let { title, text, userId, deviceId } = req.body;
    const comment = await COMMENT.create({ title, text, userId, deviceId });
    return res.json(comment);
  }
  async getAllElements(req, res) {
    const comments = await COMMENT.findAll();
    return res.json(comments);
  }
  async delOneElement(req, res) {
    let { id } = req.params;
    const comments = await COMMENT.findAll();
    if (!id) {
      throw new Error("Нет такого комментария!!!");
    }
    comments.splice(id - 1, 1);
    return res.json(comments);
  }
}

module.exports = new CommentController();
