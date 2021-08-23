import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    id: string;
}

export default class ShowUserService {
    public async execute({ id }: IRequest): Promise<User> {
        const UserRepository = getCustomRepository(UsersRepository);

        const user = await UserRepository.findById(id);

        if (!user) {
            throw new AppError("Usuario não cadastrado");
        }

        return user;
    }
}