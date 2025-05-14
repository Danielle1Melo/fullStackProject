import express from 'express'
import UsersControllers from '../controllers/usersController.js'

const usersRouter = express.Router();

const usersControllers = new UsersControllers();

export default userRouter