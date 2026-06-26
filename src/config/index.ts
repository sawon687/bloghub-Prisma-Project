import dotenv from "dotenv"
import path from 'node:path'
import { cwd } from 'node:process'

dotenv.config({path: path.join(process.cwd(),".env")})


const config={
    port:process.env.PORT,
    dbUrl:process.env.DATABASE_URL,
    appurl:process.env.APP_URL
    
}
export default config