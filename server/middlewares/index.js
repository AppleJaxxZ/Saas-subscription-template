import expressJWT from 'express-jwt'

export const requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});