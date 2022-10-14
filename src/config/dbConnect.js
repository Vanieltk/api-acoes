
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://root:teste@cluster0.ozubl.mongodb.net/?retryWrites=true&w=majority")
.then(db => console.log('Conexão com o banco Realizada com o Sucesso'))
.catch(err => console.log(err))
