import { getCustomRepository } from 'typeorm';
import Employee from '../typeorm/entities/Employee';
import EmployeeRepository from '../typeorm/repositories/EmployeeRepository';

export default class ListEmployeeService {
    public async execute(): Promise<Employee[]> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const Employee = await employeeRepository.find();
        return Employee;
    }
}