import { EntityRepository, Repository } from 'typeorm';
import Employee from '../entities/Employee';

@EntityRepository(Employee)
export default class EmployeesRepository extends Repository<Employee> {

    public async findByName(name: string): Promise<Employee | undefined> {
        const Employee = await this.findOne({
            where: { name }
        });
        return Employee;
    }

    public async findById(id: string): Promise<Employee | undefined> {
        const Employee = await this.findOne({
            where: { id }
        });
        return Employee;
    }

    public async findByRegistration(registration: string): Promise<Employee | undefined> {
        const Employee = await this.findOne({
            where: { registration }
        });
        return Employee;
    }

}