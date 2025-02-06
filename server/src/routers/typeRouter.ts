import Router from "express";
import { TypeControllers } from "../controllers/typeControllers";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/", checkRoleMiddleware("ADMIN"), TypeControllers.create);
router.get("/", TypeControllers.getAll);

export default router;
