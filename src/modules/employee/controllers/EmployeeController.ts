import { Request, Response } from "express";
import CreateEmployeeService from "../services/CreateEmployeeService";
import ListEmployeeService from "../services/ListEmployeeService";
import ShowEmployeeService from "../services/ShowEmployeeService";

export default class EmployeeController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListEmployeeService();
        const employee = await service.execute();
        return response.json(employee);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new ShowEmployeeService();
        const employee = await service.execute({ id });
        return response.json(employee);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, registration, id_company } = request.body;
        const service = new CreateEmployeeService();
        const employee = await service.execute({ name, registration, id_company });
        return response.json(employee);
    }

}