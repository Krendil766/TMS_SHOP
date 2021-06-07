require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const models = require('./models');
const cors = require("cors");
const router = require('./routes');
const errorHandlerMiddlewarean = require('./middleware/errorHandlerMiddleware');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use('/tms', router);
app.use(errorHandlerMiddlewarean)

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
