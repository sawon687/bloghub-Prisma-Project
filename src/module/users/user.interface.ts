import { Role } from '../../../prisma/generated/prisma/enums';

export interface TUsers{
    name:string,
    email:string,
    password:string,
    role:Role

}