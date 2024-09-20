const jwt = require('jsonwebtoken')

const generarToken = (id) => {

    return new Promise((resolve, reject) => {
        const payload = {uid: id}
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if(err){
                reject('Error al generar Token')
            } else {
                resolve(token)
            }
        })
    })

}

module.exports = {
    generarToken
}