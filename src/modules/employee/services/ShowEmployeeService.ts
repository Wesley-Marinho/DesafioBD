import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Employee from '../typeorm/entities/Employee';
import EmployeesRepository from '../typeorm/repositories/EmployeeRepository';

interface IRequest {
    id: string;
}

export default class ShowEmployeeService {
    public async execute({ id }: IRequest): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeesRepository);

        const employee = await employeeRepository.findById(id);

        if (!employee) {
            throw new AppError("Usuario não cadastrado");
        }

        return employee;
    }
}