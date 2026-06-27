import { create } from 'node:domain';
import { users } from '../../../prisma/generated/prisma/browser';
import { prisma } from '../../lib/prisma';
import { TUsers } from './user.interface';
import { profile } from 'node:console';

class UserServiece{
    async createDB(payload:TUsers){
        const { email } = payload
        const userexits = await prisma.users.findUnique({ where: { email } })
        if (userexits) {
            throw new Error('This email Allready exits')
        }
       
        const user = await prisma.users.create({ data: payload})
        return user

    }
}


export default new UserServiece()