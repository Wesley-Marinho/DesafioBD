import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";

export default class UserController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListUserService();
        const user = await service.execute();
        return response.json(user);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new ShowUserService();
        const user = await service.execute({ id });
        return response.json(user);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const service = new CreateUserService();
        const user = await service.execute({ name, email, password });
        return response.json(user);
    }

}