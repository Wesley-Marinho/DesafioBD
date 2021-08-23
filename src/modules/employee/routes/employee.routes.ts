import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
import { create, id } from '../validateParams/validate';

const routerEmployee = Router();

const employeeController = new EmployeeController();

routerEmployee.get('/', employeeController.index);
routerEmployee.get('/:id', id, employeeController.show);
routerEmployee.post('/', create, employeeController.create);

export default routerEmployee;