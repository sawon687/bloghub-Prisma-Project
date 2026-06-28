import { Request, Response } from 'express';
import { baseController } from '../../utils/catchAsync';
import { prisma } from '../../lib/prisma';
import authService from './auth.service';
import { sendResponse } from '../../utils/sendResponse';
import httpstauts from "http-status"
class AuthController extends baseController{
    signin=this.handle(async(req:Request,res:Response)=>{
           const payload=req.body
         
        const {accessToken,refreshToken}=await authService.signindb(payload)
        console.log(accessToken,refreshToken)
           sendResponse(res,{success:true,status:httpstauts.OK,message:'user login is success fully',data:{accessToken,refreshToken}})
    })
}

export default new AuthController()