import Router from "express";
import { BrandControllers } from "../controllers/brandControllers";

const router = Router();

router.post("/", BrandControllers.create);
router.get("/", BrandControllers.getAll);

export default router;
