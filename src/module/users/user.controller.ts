import { Request, Response } from 'express';
import { baseController } from '../../utils/catchAsync';
import { prisma } from '../../lib/prisma';
import status from "http-status"
import { TUsers } from './user.interface';
import userService from './user.service';
import { sendResponse } from '../../utils/sendResponse';
class userController extends baseController {
     createUsers= this.handle(async(req:Request,res:Response)=>{
          const payload=req.body as TUsers 
       const user= await userService.createDB(payload)
       console.log('user',user)
       sendResponse(res,{success:true,message:'user created successfully', status:status.CREATED,data:user})
     })

     getUser=this.handle(async()=>{

     })
}

export default new userController()