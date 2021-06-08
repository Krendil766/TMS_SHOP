const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const USER = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING, allowNull: false },
  person: { type: DataTypes.STRING, defaultValue: "USER" },
});

const BASKET = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BASKET_DEVICE = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const DEVICE = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.STRING, defaultValue: 0 },
  // comment: { type: DataTypes.STRING, defaultvalue: "0" },
  img: { type: DataTypes.STRING, allowNull: false },
});

const DEVICE_INFO = sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const MANUFACTURER = sequelize.define("manufacturer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const VIEW = sequelize.define("view", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const RATING = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.STRING, allowNull: false },
});

const COMMENT = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, alloNull: false },
});

const VIEW_MANUFACTURER = sequelize.define("type_manufacturer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

USER.hasOne(BASKET);
BASKET.belongsTo(USER);

USER.hasMany(RATING);
RATING.belongsTo(USER);

USER.hasMany(COMMENT);
RATING.belongsTo(USER);

BASKET.hasMany(BASKET_DEVICE);
BASKET_DEVICE.belongsTo(BASKET);

DEVICE.hasMany(COMMENT, { as: "comment_info" });
COMMENT.belongsTo(DEVICE);

// COMMENT.hasMany(DEVICE);
// DEVICE.belongsTo(COMMENT);

VIEW.hasMany(DEVICE);
DEVICE.belongsTo(VIEW);

MANUFACTURER.hasMany(DEVICE);
DEVICE.belongsTo(MANUFACTURER);

DEVICE.hasMany(RATING);
RATING.belongsTo(DEVICE);

DEVICE.hasMany(BASKET_DEVICE);
BASKET_DEVICE.belongsTo(DEVICE);

DEVICE.hasMany(DEVICE_INFO, { as: "info" });
DEVICE_INFO.belongsTo(DEVICE);

VIEW.belongsToMany(MANUFACTURER, { through: VIEW_MANUFACTURER });
MANUFACTURER.belongsToMany(VIEW, { through: VIEW_MANUFACTURER });

module.exports = {
  BASKET,
  USER,
  BASKET_DEVICE,
  DEVICE,
  DEVICE_INFO,
  VIEW,
  MANUFACTURER,
  RATING,
  COMMENT,
  VIEW_MANUFACTURER,
};
