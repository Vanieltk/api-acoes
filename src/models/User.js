const { model, Schema } = require('mongoose')

const novo_user_Schema = new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    nome: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    }
})

module.exports = model('user', novo_user_Schema)