import Router from "express";
import { Request, Response } from "express";
import brandRouter from "./brandRouter";
import typeRouter from "./typeRouter";
import userRouter from "./userRouter";
import deviceRouter from "./deviceRouter";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({ message: "test router is working" });
});

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/device", deviceRouter);

export default router;
