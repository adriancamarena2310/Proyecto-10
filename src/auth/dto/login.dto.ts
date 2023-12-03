import { IsEmail, MinLength } from "class-validator";


export declare class LoginDto {

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}
