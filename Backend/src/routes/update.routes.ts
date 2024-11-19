import express, { Router } from "express";

const router: Router = express.Router();
import {
  updateUserByEmail,
  updateUserByPassword,
  updateUserByUsername,
} from "../controllers/updateUserController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";
import { upload } from "../Utils/multerUpload.js";
import { updateAvatar } from "../controllers/userController.js";

router.patch("/updateusername", isAuthenticated, updateUserByUsername); // complete
router.patch("/updateemail", isAuthenticated, updateUserByEmail); // complete
router.patch("/updatepassword", isAuthenticated, updateUserByPassword); // complete
router.post("/updateavatar", isAuthenticated, upload, updateAvatar);

export default router;
