const User = require('../server/models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.secret

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class authController {
    async login(req, res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${email} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id)
            res.json(token)
        } catch (e){
            console.log(e)
            res.status(400).json({message: 'Authorization error'})
        }

    }


    async registration(req, res){
        try{
            const {name, email, password} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с такой электронной почтой уже существует"})
            }
            res.send(req.body)
            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({name, email, password: hashPassword})
            user.save()
            .catch((error) => {console.log(error)})
        } catch (e){
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
        
    }


    async changeInformation(req, res){
        try{

        } catch (e){
            console.log(e)
            res.status(400).json({message: 'error'})
        }
        
    }
}

module.exports = new authController()