import { Request, Response } from "express";
import { Brand } from "../models/models";

export class BrandControllers {
  public static async create(req: Request, res: Response) {
    const { name }: { name: string } = req.body;
    const brand = await Brand.create({ name });

    res.json(brand);
  }

  public static async getAll(req: Request, res: Response) {
    const brands = await Brand.findAll();

    res.json(brands);
  }
}
