const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const path = require("path");
const { USER, BASKET } = require("../models");

const ErrorHandler = require("../utils/errorHandler");

const generateJwt = (id, person, email, name) => {
  return jwt.sign({ id, email, person, name }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async registration(req, res, next) {
    const { email, password, person, name,} = req.body;
    const { img } = req.files;
    
    const fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "public", fileName));

    if (!email || !password) {
      return next(ErrorHandler.request("Некорректный email или password"));
    }
    const people = await USER.findOne({
      where: { email },
    });
    if (people) {
      return next(
        ErrorHandler.request("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await USER.create({
      email,
      person,
      name,
      password: hashPassword,
      img: fileName,
    });
    const basket = await BASKET.create({ userId: user.id });
    const token = generateJwt(user.id, user.person, user.email, user.name);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await USER.findOne({
      where: { email },
    });
    if (!user) {
      return next(ErrorHandler.request("Пользователь не найден !!!"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ErrorHandler.request("Неверный пароль !!!"));
    }
    const token = generateJwt(user.id, user.person, user.email, user.name);

    return res.json({ token});
  }

  async check(req, res, next) {
    const { id, person, email, name } = req.user;
    const token = generateJwt(id, person, email, name);
    return res.json({ token });
  }
}

module.exports = new UserController();
