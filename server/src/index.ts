require("dotenv").config();
import express, { Application, Request, Response } from "express";
import { sequelize } from "./db";
import cors from "cors";

const models = require("./models/models");

const port = process.env.PORT || 5050;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({ message: "Working " });
});

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
