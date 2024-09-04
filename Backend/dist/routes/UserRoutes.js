import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
const router = Router();
// Route for getting all users
router.get('/users', getAllUsers);
// Route for getting a single user by ID
router.get('/users/:id', getUserById);
// Route for creating a new user
router.post('/users', createUser);
// Route for updating a user by ID
router.put('/users/:id', updateUser);
// Route for deleting a user by ID
router.delete('/users/:id', deleteUser);
export default router;
