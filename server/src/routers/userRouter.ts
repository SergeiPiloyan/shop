import Router from "express";
import { UserControllers } from "../controllers/userControllers";

const router = Router();

router.post("/registration", UserControllers.registration);
router.post("/login", UserControllers.login);
router.get("/auth", UserControllers.checkAuth);

export default router;
