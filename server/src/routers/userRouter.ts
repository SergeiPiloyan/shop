import Router from "express";
import { UserControllers } from "../controllers/userControllers";
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/registration", UserControllers.registration);
router.post("/login", UserControllers.login);
router.get("/auth", authMiddleware, UserControllers.checkAuth);

export default router;
