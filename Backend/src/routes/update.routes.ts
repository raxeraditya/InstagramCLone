import express, { Router } from "express";

const router: Router = express.Router();
import {
  updateUserByEmail,
  updateUserByPassword,
  updateUserByUsername,
} from "../controllers/updateUserController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";

router.patch("/updateusername", isAuthenticated, updateUserByUsername); // complete
router.patch("/updateemail", isAuthenticated, updateUserByEmail); // complete
router.patch("/updatepassword", isAuthenticated, updateUserByPassword); // complete

export default router;
