import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Company from '../typeorm/entities/Company';
import CompanysRepository from '../typeorm/repositories/CompanyRepository';

interface IRequest {
    id: string;
}

export default class ShowCompanyService {
    public async execute({ id }: IRequest): Promise<Company> {
        const CompanyRepository = getCustomRepository(CompanysRepository);

        const Company = await CompanyRepository.findById(id);

        if (!Company) {
            throw new AppError("Empresa não cadastrado");
        }

        return Company;
    }
}