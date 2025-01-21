import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";

export class UserControllers {
  public static async login(req: Request, res: Response) {}

  public static async registration(req: Request, res: Response) {}

  public static async checkAuth(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.query;

    if (!id) {
      return next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }

    res.json(id);
  }
}
