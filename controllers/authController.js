const User = require('../server/models/user')
const bcrypt = require('bcrypt')


class authController {
    async login(req, res){
        try{

        } catch (e){
            console.log(e)
            res.status(400).json({message: 'Registration error'})
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


    async listViewer(req, res){
        try{

        } catch (e){
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
        
    }
}

module.exports = new authController()