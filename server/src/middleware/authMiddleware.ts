import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(ApiError.handleError(ErrorCode.UNAUTHORIZED));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    req.body.user = decoded;
    next();
  } catch (error) {
    return next(ApiError.handleError(ErrorCode.BAD_REQUEST));
  }
};

module.exports = authMiddleware;
