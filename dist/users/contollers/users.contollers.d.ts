import { CreateUsersDto, ListAllEntities, UpdateUsersDto } from '../dto/users.dto';
export declare class UsersController {
    create(createUserDto: CreateUsersDto): Promise<CreateUsersDto>;
    findAll(query: ListAllEntities): string;
    findOne(id: number): Promise<string>;
    update(id: number, updateUsersDto: UpdateUsersDto): string;
    remove(id: number): string;
}
