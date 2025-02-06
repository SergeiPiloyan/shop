import Router from "express";
import { DeviceControllers } from "../controllers/deviceControllers";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/", checkRoleMiddleware("ADMIN"), DeviceControllers.create);
router.get("/", DeviceControllers.getAll);
router.get("/:id", DeviceControllers.getOne);

export default router;
