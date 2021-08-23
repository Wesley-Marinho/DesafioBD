import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICompany } from '../interfaces/company';
import Company from '../typeorm/entities/Company';
import CompanyRepository from '../typeorm/repositories/CompanyRepository';

export default class CreateCompanyService {
    public async execute({ name, cnpj }: ICompany): Promise<Company> {
        const companyRepository = getCustomRepository(CompanyRepository);

        const CompanyExists = await companyRepository.findByCNPJ(cnpj);

        if (CompanyExists) {
            throw new AppError("Empresa já cadastrado");
        }

        const Company = companyRepository.create({
            name,
            cnpj
        });

        await companyRepository.save(Company);

        return Company;
    }
}