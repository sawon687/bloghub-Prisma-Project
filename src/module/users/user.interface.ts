import { Role } from '../../../prisma/generated/prisma/enums';

export interface TUsers{
    id:string
    name:string,
    email:string,
    password:string,
    role:Role

}