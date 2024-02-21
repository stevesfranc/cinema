import { CreateUsersDto, UserDto } from "../dto/users.dto";
export declare class UserService {
    userRegister(userData: CreateUsersDto): CreateUsersDto;
    findUsersById(userId: number): UserDto;
    getAllUsers(): UserDto[];
    deleteUser(userId: number): boolean;
    updateUser(userId: number, data: UserDto): any;
}
