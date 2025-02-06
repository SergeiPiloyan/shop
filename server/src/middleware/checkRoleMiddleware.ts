import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";
import jwt from "jsonwebtoken";

type UserInfoType = {
  id: number;
  email: string;
  role: "USER" | "ADMIN";
};

export const checkRoleMiddleware = (role: "USER" | "ADMIN") => {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return next(ApiError.handleError(ErrorCode.UNAUTHORIZED));
      }

      const decodedUser: any = jwt.verify(
        token,
        process.env.SECRET_KEY as string
      );

      if (decodedUser.role !== role) {
        return next(ApiError.handleError(ErrorCode.WRONG_CREDENTIALS));
      }

      req.body.user = decodedUser;
      next();
    } catch (error) {
      return next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }
  };
};
