import express, { Application, Request, Response } from "express"
import cors from "cors"
import config from './config'
import { userRoutes } from './module/users/user.route'
import { authRoutes } from './module/auth/auth.route'


const app:Application=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:config.appurl,
    credentials:true
}))
app.get('/',(req:Request,res:Response)=>{
    res.send('bloghun prisma project')
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

export default app