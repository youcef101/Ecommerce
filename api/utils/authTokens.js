import jwt from 'jsonwebtoken'

export let refreshTokens = []

export const verifyTokens = async (req, res, next) => {
    let authToken = req.headers.authorization
    if (authToken) {
        const token = authToken.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
            if (err) {
                res.status(403).send('Token Is Invalid !!!')
            }
            req.user = user
            next()
        })

    } else {
        res.status(400).send('User Is Not Authenticated !!!')
    }

}
export const generateAccessToken = (user) => {
    return jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
        email: user.email
    }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1m" })
}
export const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
        email: user.email
    }, process.env.REFRESH_TOKEN_SECRET_KEY)
}