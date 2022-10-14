const { model, Schema, default:mongoose } = require('mongoose')

const nova_acao_schema= new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
    },
    setorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'setor',
        required: true,
    },
})

module.exports = model('acoes', nova_acao_schema)
