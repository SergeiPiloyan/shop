import Router from "express";
import { BrandControllers } from "../controllers/brandControllers";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/", checkRoleMiddleware("ADMIN"), BrandControllers.create);
router.get("/", BrandControllers.getAll);

export default router;
