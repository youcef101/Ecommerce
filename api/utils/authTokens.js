import jwt from 'jsonwebtoken'

export let refreshTokens = []

export const verifyTokens = async (req, res, next) => {
    let authToken = req.headers.authorization
    if (authToken) {
        const token = authToken.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
            if (err) return console.log(err)
            req.user = user
            next()
        })

    } else {
        res.status(400).send('User Is Not Authenticated !!!')
    }

}
export const generateAccessToken = (user) => {
    return jwt.sign({
        id: user.id,
        isAdmin: user.isAdmin,
        email: user.email
    }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "30s" })
}
export const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user.id,
        isAdmin: user.isAdmin,
        email: user.email
    }, process.env.REFRESH_TOKEN_SECRET_KEY)
}