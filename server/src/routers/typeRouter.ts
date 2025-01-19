import Router from "express";
import { TypeControllers } from "../controllers/typeControllers";

const router = Router();

router.post("/", TypeControllers.create);
router.get("/", TypeControllers.getAll);

export default router;
