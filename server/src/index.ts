require("dotenv").config();
import express, { Application } from "express";
import { sequelize } from "./db";
import cors from "cors";
import router from "./routers/index";
import fileUpload from "express-fileupload";
import path from "path";

const errorHandler = require("./middleware/errorHandlingMiddleware");
const models = require("./models/models");

const port = process.env.PORT || 5050;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
