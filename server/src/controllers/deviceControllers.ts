import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
import path from "path";
import { Device } from "../models/models";
import { ApiError } from "../error/ApiError";
import { ErrorCode } from "../enums/ErrorCodes";

type DeviceType = {
  name: string;
  price: string;
  brandId: number;
  typeId: number;
  info?: any;
};

export class DeviceControllers {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, brandId, typeId, info }: DeviceType = req.body;

      const fileName = v4() + ".jpg";

      if (req.files && req.files.img) {
        const img = req.files.img as UploadedFile;
        img.mv(path.resolve(__dirname, "..", "static", fileName));
      }

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      res.json(device);
    } catch (error) {
      next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }
  }

  public static async getAll(req: Request, res: Response) {}

  public static async getOne(req: Request, res: Response) {}
}
