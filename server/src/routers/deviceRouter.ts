import Router from "express";
import { DeviceControllers } from "../controllers/deviceControllers";

const router = Router();

router.post("/", DeviceControllers.create);
router.get("/", DeviceControllers.getAll);
router.get("/:id", DeviceControllers.getOne);

export default router;
