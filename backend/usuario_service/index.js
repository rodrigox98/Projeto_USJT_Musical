
const express = require('express') 
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors') 
const app = express()
const axios = require('axios')
const bcrypt = require('bcrypt')
const EventEmmiter = require('events')


app.use(cors())
app.use(bodyParser.json())
const port = 3001

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1593574862',
    database: 'usuarios_db'
})

//what is wrong with this code above?
app.post('/usuarios', (req, res) => {    
    const nome = req.body.nome
    const email = req.body.email
    const senha  = req.body.senha
    const sql = 'INSERT INTO usuarios_tb (nome, email, senha) VALUES (?, ?, ?)'
    connection.query(sql, [nome, email, senha], (err, results) => {
        console.log(err)
    })

    axios.post('http://localhost:3003/eventos', {
        tipo: 'envioEmail',
        dados: {
            nome,
            email, 
        }
        }).catch((err) => {
            console.log('Erro ao enviar o email')
    
})
})


app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha

    connection.query('SELECT * FROM usuarios_tb WHERE email = ? AND senha = ?', [email, senha], (err, results) => {
    if(err){
        res.send({err:err})
    }
    if(results.length > 0){
        res.send(results)
    }else{
        res.send({message: 'Nenhum usuário encontrado'})
    }
    })
}) 


/*
app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    // Verifica se o email e a senha foram fornecidos
    if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }
    
    // Consulta o banco de dados para encontrar o usuário com o email fornecido
    connection.query('SELECT * FROM usuarios_tb WHERE email = ?', [email], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
      }
  
      // Verifica se o usuário foi encontrado
      if (results.length === 0) {
        return res.status(401).json({ message: 'Email ou senha inválidos.' });
      }
  
      // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
      if(results.length > 0){
      const usuario = results[0];
      bcrypt.compare(senha, usuario.senha, (err, match) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
  
        if (!match) {
          return res.status(401).json({ message: 'Email ou senha inválidos.' });
        }
  
        // Autenticação bem-sucedida
        return res.status(200).json({ message: 'Autenticação bem-sucedida.' });
      });
    }
    });
  });*/
  

app.get('/usuarios', (req, res) => { 
    const query = 'SELECT * FROM usuarios_tb'
    connection.query(query, (err, results) => {
        if(err){
            console.error(err)
            res.status(500).send('Erro ao consultar usuário')
        }else{
            res.json(results)
        }
    })
})


app.listen(port, () => {
    console.log(`Executando na porta ${port}`) 
})

