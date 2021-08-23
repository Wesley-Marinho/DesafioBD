import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { IUser } from '../interfaces/user';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

export default class CreateUserService {
    public async execute({ email, name, password }: IUser): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const userExists = await userRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("Usuario já cadastrado");
        }

        const user = userRepository.create({
            email,
            name,
            password
        });

        await userRepository.save(user);

        return user;
    }
}