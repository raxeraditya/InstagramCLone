import express, { Router } from "express";
const router: Router = express.Router();

import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import {
  addComment,
  addPost,
  deletPost,
  dislikeUserPost,
  getPostUsingQueryOrPageNo,
  likeUserPost,
  saveUserPost,
} from "../controllers/postController.js";
import { isAuthenticated } from "../Utils/authenticationByToken.js";
import { sendMessage } from "../controllers/messageController.js";

// user routes
router.post("/register", createUser); // complete
router.post("/login", loginUser); // complete
router.get("/logout", isAuthenticated, logoutUser);
router.get("/getallusers", isAuthenticated, getAllUsers); // complete
router.get("/getuserbyid/:id", isAuthenticated, getUserById); // complete
router.delete("/deleteuser/:id", isAuthenticated, deleteUser); // complete

// functionality route related to post comment like ...
router.post("/addpost", isAuthenticated, addPost); // complete
router.patch("/addcomment/:id", isAuthenticated, addComment); // complete
router.get("/likeuserpost/:id", isAuthenticated, likeUserPost); // complete
router.get("/dislikeuserpost/:id", isAuthenticated, dislikeUserPost); // complete
router.get("/savepost/:id", isAuthenticated, saveUserPost); // complete
router.get("/getpostbyquery", isAuthenticated, getPostUsingQueryOrPageNo); // complete
router.get("/deletepost/:id", isAuthenticated, deletPost); // complete
router.post("/sendmessage/:id", isAuthenticated, sendMessage);

export default router;
