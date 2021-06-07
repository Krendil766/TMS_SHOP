require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

const init = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server start to port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

init();
