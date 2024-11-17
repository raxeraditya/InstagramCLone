import express, { Router } from "express";

const router: Router = express.Router();
import {
  updateUserByEmail,
  updateUserByPassword,
  updateUserByUsername,
} from "../controllers/updateUserController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";

router.get("/updateusername", isAuthenticated, updateUserByUsername); // complete
router.get("/updateemail", isAuthenticated, updateUserByEmail); // complete
router.get("/updatepassword", isAuthenticated, updateUserByPassword); // complete

export default router;
