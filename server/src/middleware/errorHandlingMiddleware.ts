import { Request, NextFunction, Response } from "express";
import { ApiError } from "../error/ApiError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorHandler;
