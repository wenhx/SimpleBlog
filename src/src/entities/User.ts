import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    name: string;

    @Column({ name: 'display_name', length: 20 })
    displayName: string;

    @Column({ length: 40 })
    password: string;

    @Column({ name: 'is_admin', type: Boolean })
    isAdmin: boolean;

    @Column()
    created: Date;
}