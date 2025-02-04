import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";
import { Basket, User } from "../models/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJwtToken = (id: number, email: string, role: string) => {
  return jwt.sign({ id: id, email, role }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });
};

export class UserControllers {
  public static async registration(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      next(ApiError.handleError(ErrorCode.ACCESS_DENIED));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user: any = await User.create({
      email,
      role,
      password: hashPassword,
    });
    const basket = await Basket.create({ userId: user.id });

    const token = generateJwtToken(user.id, user.email, user.role);

    res.json({ token });
  }

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
