import { Router } from "express";
import UserController from "../controllers/UserController";
import { create, id } from '../validateParams/validate';

const routerUser = Router();

const userController = new UserController();

routerUser.get('/', userController.index);
routerUser.get('/:id', id, userController.show);
routerUser.post('/', create, userController.create);

export default routerUser;