import routerCompany from "@modules/company/routes/company.routes";
import routerEmployee from "@modules/employee/routes/employee.routes";
import routerUser from "@modules/user/routes/user.routes";
import { Router } from "express";

const routes = Router();

routes.use('/employee', routerEmployee);
routes.use('/user', routerUser);
routes.use('/company', routerCompany);

export default routes;