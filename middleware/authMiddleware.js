const jwt = require('jsonwebtoken')
const { secret } = process.env.secret

module.exports = function (req, res, token, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        if (!token) {
            return res.status(403).json({ message: "Пользователь не авторизован" })
        }
        const decodedData = jwt.verify(token, process.env.JWT_KEY)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Возникла ошибка! " })
    }
}