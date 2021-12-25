import express from 'express'
import { generateAccessToken, generateRefreshToken, refreshTokens } from '../utils/authTokens.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from token router !!!')
})

//refresh token
router.post('/refresh', async (req, res) => {
    let refreshToken = req.body.refreshToken
    if (!refreshToken) return res.status(400).send('Token Does Not Exists!!!')
    if (!refreshTokens.includes(refreshToken)) return res.status(401).send('User Is Not Authenticated !!!')
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, (err, user) => {
        if (err) {
            res.status(401).send('Token Is Invalid !!!')
        }
        let newRefreshToken = generateRefreshToken(user)
        let newAccessToken = generateAccessToken(user)
        refreshTokens.splice(0, 1, newRefreshToken)
        res.status(200).send({
            newAccessToken: newAccessToken,
            newRefreshToken: newRefreshToken
        })
    })

})

export default router