import express, { Router } from "express";

const router: Router = express.Router();
import {
  updateUserByEmail,
  updateUserByPassword,
  updateUserByUsername,
} from "../controllers/updateUserController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";

router.get("/updateusername/:id", isAuthenticated, updateUserByUsername); // complete
router.get("/updateemail/:id", isAuthenticated, updateUserByEmail); // complete
router.get("/updatepassword/:id", isAuthenticated, updateUserByPassword); // complete

export default router;
