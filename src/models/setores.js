const { model, Schema, default: mongoose } = require('mongoose')

const novo_setor_schema = new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    setor: {
        type: String,
        required: true,
    },

})

module.exports = model('setor', novo_setor_schema)