export declare class CreateUsersDto {
    name: string;
    email: string;
    birth: Date;
    password: string;
}
export declare class GetUserByIdDto {
    id: number;
}
export declare class UserDto {
    name: string;
    email: string;
    birth: Date;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
export declare class UpdateUsersDto {
    name: string;
    email: string;
    birth: Date;
    password: string;
}
export declare class ListAllEntities {
    user: CreateUsersDto;
    limit: number;
}
