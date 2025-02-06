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
      return next(ApiError.handleError(ErrorCode.ACCESS_DENIED));
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

    await Basket.create({ userId: user.id });

    const token = generateJwtToken(user.id, user.email, user.role);

    res.json({ token });
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const user: any = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.handleError(ErrorCode.WRONG_CREDENTIALS));
    }

    const comparedPassword = bcrypt.compareSync(password, user.password);
    if (!comparedPassword) {
      return next(ApiError.handleError(ErrorCode.WRONG_CREDENTIALS));
    }

    const token = generateJwtToken(user.id, user.email, user.role);
    res.json({ token });
  }

  public static async checkAuth(req: Request, res: Response) {
    const user: { id: number; email: string; role: "USER" | "ADMIN" } =
      req.body.user;
    const token = generateJwtToken(user.id, user.email, user.role);
    res.json({ token });
  }
}
