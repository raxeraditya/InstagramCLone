import express, { Router } from "express";
const router: Router = express.Router();

import {
 getAllUsers,
 getUserById,
 createUser,
 updateUser,
 deleteUser
} from "../controllers/userController.js";

router.post("/v1/register", createUser);
router.post("/v1/getallusers", getAllUsers);
router.get("/v1/updateuser", updateUser);
router.get("/v1/getuserbyid", getUserById);
router.get("/v1/deleteuser", deleteUser);


export default router;