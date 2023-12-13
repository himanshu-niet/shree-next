const jwt = require('jsonwebtoken')
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
module.exports = {
    signAccessToken(payload){
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, accessTokenSecret, {
            }, (err, token) => {
                if (err) {
                reject(err)
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject(message)
                }
                resolve(payload)
            })
        })
    }
}