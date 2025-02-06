import { NextFunction, Request, Response } from "express";
import { Type } from "../models/models";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";

export class TypeControllers {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });

      res.json(type);
    } catch (error) {
      return next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }
  }

  public static async getAll(req: Request, res: Response) {
    const types = await Type.findAll();

    res.json(types);
  }
}
