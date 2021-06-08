const uuid = require("uuid");
const path = require("path");

const { DEVICE, DEVICE_INFO, COMMENT } = require("../models");
const ErrorHandler = require("../utils/errorHandler");

class DeviceController {
  async createElement(req, res, next) {
    try {
      let { name, price, rating, viewId, manufacturerId, info, comment_info } =
        req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "img", fileName));

      const device = await DEVICE.create({
        name,
        price,
        rating,
        viewId,
        manufacturerId,
        img: fileName,
      });
      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DEVICE_INFO.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }
      //   if (comment_info) {
      //     info = JSON.parse(info);
      //     info.forEach((i) => {
      //       COMMENT.create({
      //         title: i.title,
      //         text: i.description,
      //         deviceId: device.id,
      //       });
      //     });
      //   }
      return res.json(device);
    } catch (e) {
      return next(ErrorHandler.request(e.message));
    }
  }

  async getAllElements(req, res) {
    let { viewId, manufacturerId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 7;

    let offset = page * limit - limit;
    let devices;

    if (!manufacturerId && !viewId) {
      devices = await DEVICE.findAndCountAll({ limit, offset });
    }

    if (manufacturerId && !viewId) {
      devices = await DEVICE.findAndCountAll({
        where: { manufacturerId },
        limit,
        offset,
      });
    }

    if (!manufacturerId && viewId) {
      devices = await DEVICE.findAndCountAll({
        where: { viewId },
        limit,
        offset,
      });
    }

    if (manufacturerId && viewId) {
      devices = await DEVICE.findAndCountAll({
        where: { viewId, manufacturerId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOneElements(req, res) {
    let { id } = req.params;
    const device = await DEVICE.findOne({
      where: { id },
      include: {
        model: DEVICE_INFO,
        as: "info",
      },
    });
    return res.json(device);
  }
  async delOneElement(req, res) {
    let { id } = req.params;
    const devices = await DEVICE.findAll();
    if (!id) {
      throw new Error("Нет такого товара!!!");
    }
    devices.splice(id - 1, 1);
    return res.json(devices);
  }
}

module.exports = new DeviceController();
