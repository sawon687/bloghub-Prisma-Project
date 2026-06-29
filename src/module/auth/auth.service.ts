
import { prisma } from '../../lib/prisma'
import bcrypt from "bcrypt"
import { IloginUser } from './auth.interface'
import { jwtUtils } from '../../utils/jwt'
import config from '../../config'
import { SignOptions } from 'jsonwebtoken'
class AuthService{
   async signindb(payload:IloginUser
   ){  
    const {email,password}=payload
      const user=await prisma.users.findUnique({where:{email}})

      if(!user)
      {
         throw new Error('This email is not found')
      }


      const passwordMatch = await bcrypt.compare(password, user.password)
      if(!passwordMatch){
         throw new Error('password does not match! please try again')
      }
    
       const JwtPayload = {
         id: user.id,
         name: user.name,
         email: user.email,
         role: user.role,
       }
      const accessToken = jwtUtils.createToken(
         JwtPayload,
         config.accessSecret,
         { expiresIn: config.jwt_access_Expires } as SignOptions,
      )

      const refreshToken=jwtUtils.createToken(JwtPayload,config.refreshSecret,{expiresIn:config.jwt_refresh_Expires} as SignOptions)
      return {accessToken,refreshToken}
    }
}

export default new AuthService()