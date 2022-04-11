import expressJWT from 'express-jwt'
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

export const requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});





export const auth = async (req, res, next) => {
    try {

        const user = await User.findOne({
            id: req.body._id,
        });
        console.log(user)
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: "Please authenticate." });
    }
};

module.exports = auth;