import { IsDate, IsDefined, IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsPositive, Length, MinLength } from "class-validator";

 
export class CreateUsersDto {
    @IsNotEmpty()
    @IsNotEmpty({ message: 'Name is required' })
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    name: string;

    @IsNotEmpty({ message: 'Email is required' })
    @MinLength(3, { message: 'Email must be at least 3 characters long' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'Birth is required' })
    // @IsDate()
    birth: Date;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(3, { message: 'Password must be at least 3 characters long' })
    password: string;
}

export class GetUserByIdDto{
    @IsNotEmpty({ message: 'ID is required' })
    @IsInt({ message: 'ID must be an integer' })
    @IsNumberString()
    id: number;
}

export class UserDto {
    name: string;
    email: string;
    birth: Date;
    password: string;
    created_at:Date;
    updated_at:Date;
    deleted_at:Date;

}

export class UpdateUsersDto {
    name: string;
    email: string;
    birth: Date;
    password: string;
}

export class ListAllEntities{
    user: CreateUsersDto;
    limit: number;

}

 