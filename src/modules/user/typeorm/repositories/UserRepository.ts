import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export default class UsersRepository extends Repository<User> {

    public async findByName(name: string): Promise<User | undefined> {
        const User = await this.findOne({
            where: { name }
        });
        return User;
    }

    public async findById(id: string): Promise<User | undefined> {
        const User = await this.findOne({
            where: { id }
        });
        return User;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const User = await this.findOne({
            where: { email }
        });
        return User;
    }

}