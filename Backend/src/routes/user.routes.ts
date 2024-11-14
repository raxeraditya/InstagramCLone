import express, { Router } from "express";
const router: Router = express.Router();

import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  loginUser,
} from "../controllers/userController.js";
import { addComment, addPost } from "../controllers/postController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";

// user routes
router.post("/register", createUser); // complete
router.post("/login", loginUser);
router.get("/getallusers", isAuthenticated, getAllUsers); // complete
router.get("/getuserbyid/:id", isAuthenticated, getUserById); // complete
router.get("/deleteuser/:id", isAuthenticated, deleteUser); // complete

// post routes
router.post("/addcomment/:id", isAuthenticated, addComment);
router.post("/addpost", isAuthenticated, addPost);

export default router;
