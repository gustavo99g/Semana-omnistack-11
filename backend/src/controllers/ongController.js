const crypt = require('crypto')
const connection = require('../database/connect')

module.exports ={
    async create(req,res) {
        
    const {name , email , whatsapp, cidade, uf} = req.body
    const id = crypt.randomBytes(4).toString('HEX')
   
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        cidade,
        uf,
    })

     return res.json( { id })
    },

    async listar(req,res){
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)

    }
}