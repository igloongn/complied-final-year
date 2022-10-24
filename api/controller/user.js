const User = require("../models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()




const Users = (req, res, next) => {

    return res.status(200).json({
        message: 'Success'
    })
}


const createUser = async (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body
    try {
        const emailExist = await User.findOne({ email: email })
        if (emailExist) {
            return res.status(200).json({
                message: 'Email Exist',
            })
        } else {
            const usernameExist = await User.findOne({ username: username })
            if (usernameExist) {
                return res.status(200).json({
                    message: 'Username Exist',
                    error: 'Failed'
                })
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                const user = new User({
                    username,
                    email,
                    password: hashedPassword
                })
                await user.save()
                return res.status(200).json({
                    message: 'Success',
                    hashedPassword,
                })
            }

        }
    } catch (err) {
        return res.status(404).json({
            message: 'Failed in creating user',
            error: err.message,
            err: err
        })


    }




}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.find({ email })
        if (user.length === 0) {
            return res.status(401).json({
                message: 'Email Not Exist',
            })
        } else {
            const userCheck = await bcrypt.compare(password, user[0].password);
            if (!userCheck) {
                return res.status(401).json({
                    message: 'Something is wrong with Password',
                })
            } else {
                const optionsPayload = {
                    expiresIn: '1h'
                }
                const token = jwt.sign({
                    _id: user[0]._id,
                    username: user[0].username,
                    email: user[0].email,
                }, process.env.JWT_SECRET_KEY, optionsPayload);



                return res.status(200).json({
                    // message: 'Username and password Correct',
                    token,
                })
            }
        }
    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message: 'Error in the Login',
            errorMessage: err.message,
            error: err
        })
    }

}

module.exports = {
    Users,
    createUser,
    login,
}


