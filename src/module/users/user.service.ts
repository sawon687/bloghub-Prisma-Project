import { create } from 'node:domain';
import { users } from '../../../prisma/generated/prisma/browser';
import { prisma } from '../../lib/prisma';
import { TUsers } from './user.interface';
import { profile } from 'node:console';
import byript from "bcrypt"
import config from '../../config';
class UserServiece{
    async createDB(payload:TUsers){
        const { email, password ,name,role} = payload
        console.log('payload',payload)
        const userexits = await prisma.users.findUnique({ where: { email } })
        if (userexits) {
            throw new Error('This email Allready exits')
        }
        const hashedPassword = await byript.hash(password, Number(config.bycriptHashRound))
        console.log(hashedPassword)
        const user = await prisma.users.create({ data:{
            email,
            password: hashedPassword,
            name,
            role
        },
    omit:{password:true}})
        console.log('user',user)
        return user

    }
}


export default new UserServiece()