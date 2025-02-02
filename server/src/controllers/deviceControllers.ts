import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
import path from "path";
import { Device, DeviceInfo } from "../models/models";
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

      const device = await Device.create<any>({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        const parsedInfo: { title: string; description: string }[] =
          JSON.parse(info);

        parsedInfo.forEach((i) => {
          Device.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      res.json(device);
    } catch (error) {
      next(ApiError.handleError(ErrorCode.BAD_REQUEST));
    }
  }

  public static async getAll(req: Request, res: Response) {
    const { brandId, typeId, limit = 9, page = 1 } = req.query;

    const offset = Number(page) * Number(limit) - Number(limit);

    const where = {
      ...(brandId && { brandId }),
      ...(typeId && { typeId }),
    };

    const devices = await Device.findAndCountAll({
      where,
      limit: Number(limit),
      offset,
    });

    res.json(devices);
  }

  public static async getOne(req: Request, res: Response) {
    const { id } = req.params;

    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });

    res.json(device);
  }
}
