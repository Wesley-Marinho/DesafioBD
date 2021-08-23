import {
    Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';

@Entity('customers')
export default class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    registration: string;

    @Column()
    id_company: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}