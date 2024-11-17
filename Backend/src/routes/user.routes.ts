import express, { Router } from "express";
const router: Router = express.Router();

import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
  likeUserPost,
  dislikeUserPost,
} from "../controllers/userController.js";
import { addComment, addPost } from "../controllers/postController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";

// user routes
router.post("/register", createUser); // complete
router.post("/login", loginUser); // complete
router.get("/logout", isAuthenticated, logoutUser);
router.get("/getallusers", isAuthenticated, getAllUsers); // complete
router.get("/getuserbyid/:id", isAuthenticated, getUserById); // complete
router.get("/deleteuser/:id", isAuthenticated, deleteUser); // complete

// functionality route related to post comment like ...
router.post("/addpost", isAuthenticated, addPost);
router.post("/addcomment/:id", isAuthenticated, addComment);
router.get("/likeuserpost/:id", isAuthenticated, likeUserPost);
router.get("/dislikeuserpost/:id", isAuthenticated, dislikeUserPost);

export default router;
