import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

export default class ListUserService {
    public async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.find();
        return user;
    }
}