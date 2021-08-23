import { EntityRepository, Repository } from 'typeorm';
import Company from '../entities/Company';

@EntityRepository(Company)
export default class CompanysRepository extends Repository<Company> {

    public async findByName(name: string): Promise<Company | undefined> {
        const Company = await this.findOne({
            where: { name }
        });
        return Company;
    }

    public async findById(id: string): Promise<Company | undefined> {
        const Company = await this.findOne({
            where: { id }
        });
        return Company;
    }

    public async findByCNPJ(cnpj: string): Promise<Company | undefined> {
        const Company = await this.findOne({
            where: { cnpj }
        });
        return Company;
    }

}