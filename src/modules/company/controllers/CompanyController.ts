import { Request, Response } from "express";
import CreateCompanyService from "../services/CreateCompanyService";
import ListCompanyService from "../services/ListCompanyService";
import ShowCompanyService from "../services/ShowCompanyService";

export default class CompanyController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListCompanyService();
        const company = await service.execute();
        return response.json(company);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new ShowCompanyService();
        const company = await service.execute({ id });
        return response.json(company);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, cnpj } = request.body;
        const service = new CreateCompanyService();
        const company = await service.execute({ name, cnpj});
        return response.json(company);
    }

}