const express = require('express');
const routes = require('./routes/routes')
require('./config/dbConnect')

const port = 3000
const app = express()

app.listen(port, () => {
    console.log(`Servidor Ok no Endereço http://localhost:`,port);
})


app.use(express.json())
app.use(routes)
