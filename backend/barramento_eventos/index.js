const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const eventos = []

const funcoes =  {
    envioEmail: (email) => {
        axios.post('http://localhost:3002/enviar-email', email).catch((err) => {
            console.log(err.message)
    })
}
}

app.post('/eventos', (req, res) => {
    res.send(funcoes[req.body.tipo](req.body.dados))
})
app.listen(3003, () =>  {
    console.log('Barramento de eventos. Porta 3003')
})