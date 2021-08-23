import { Router } from "express";
import CompanyController from "../controllers/CompanyController";
import { create, id } from '../validateParams/validate';

const routerCompany = Router();

const companyController = new CompanyController();

routerCompany.get('/', companyController.index);
routerCompany.get('/:id', id, companyController.show);
routerCompany.post('/', create, companyController.create);

export default routerCompany;