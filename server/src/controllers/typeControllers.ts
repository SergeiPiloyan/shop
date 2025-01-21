import { Request, Response } from "express";
import { Type } from "../models/models";

export class TypeControllers {
  public static async create(req: Request, res: Response) {
    const { name } = req.body;
    const type = await Type.create({ name });

    res.json(type);
  }

  public static async getAll(req: Request, res: Response) {
    const types = await Type.findAll();

    res.json(types);
  }
}
