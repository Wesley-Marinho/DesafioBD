import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { IEmployee } from '../interfaces/employee';
import Employee from '../typeorm/entities/Employee';
import EmployeeRepository from '../typeorm/repositories/EmployeeRepository';

export default class CreateEmployeeService {
    public async execute({name, registration, id_company }: IEmployee): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employeeExists = await employeeRepository.findByRegistration(registration);

        if (employeeExists) {
            throw new AppError("Funcionario já cadastrado");
        }

        const employee = employeeRepository.create({
            name,
            registration,
            id_company
        });

        await employeeRepository.save(employee);

        return employee;
    }
}