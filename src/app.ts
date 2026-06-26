import express, { Application, Request, Response } from "express"
import cors from "cors"
import config from './config'
import { userRoutes } from './module/users/user.route'


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

export default app