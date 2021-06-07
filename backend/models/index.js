const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const USER = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING, allowNull: false },
  person: { type: DataTypes.STRING, defaultvalue: "USER" },
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
  com: { type: DataTypes.STRING, defaultvalue: "0" },
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

const TYPE = sequelize.define("manufacturer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const RATING = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.STRING, allowNull: false },
});

const COMMENT = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, alloNull: false },
});

const TYPE_MANUFACTURER = sequelize.define("type_manufacturer", {
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

DEVICE.hasMany(COMMENT);
COMMENT.belongsTo(DEVICE);

MANUFACTURER.hasMany(DEVICE);
DEVICE.belongsTo(MANUFACTURER);

TYPE.hasMany(DEVICE);
DEVICE.belongsTo(TYPE);

DEVICE.hasMany(BASKET_DEVICE);
BASKET_DEVICE.belongsTo(DEVICE);

DEVICE.hasMany(DEVICE_INFO);
DEVICE_INFO.belongsTo(DEVICE);

TYPE.belongsToMany(MANUFACTURER, { through: TYPE_MANUFACTURER });
MANUFACTURER.belongsToMany(TYPE, { through: TYPE_MANUFACTURER });

module.exports = {
  USER,
  BASKET,
  BASKET_DEVICE,
  DEVICE,
  DEVICE_INFO,
  TYPE,
  MANUFACTURER,
  RATING,
  COMMENT,
  TYPE_MANUFACTURER
}
