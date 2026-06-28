import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"
export const createToken = (payload: JwtPayload, secret: string, expiresIn: SignOptions) => {
    try {
        const token = jwt.sign(payload, secret, expiresIn as SignOptions)
        return token
    } catch (error) {
        console.log(error)
    }
}