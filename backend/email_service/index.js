
const express = require('express');
const nodemailer = require('nodemailer');
const EventEmitter = require('events');

const emmiter = new EventEmitter();
const app = express();
const port = 3002;

app.use(express.json());


app.post('/enviar-email', (req, res) => {

  const email = req.body.email
  const nome = req.body.nome

  const assunto = 'Mix Music. Bem Vindo'
  const mensagem = 'Seja muito bem vindo ao Mix Music! Aqui você encontra uma plataforma para ouvir suas músicas favoritas. Aproveite! :)'
  const destinatario = email
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth:{
    user:'mixmusica3@hotmail.com', // email remetente
    pass: 'mix@music123' // senha remetente
    },
  });

  const mailOptions = {
    from: 'mixmusica3@hotmail.com', //email remetente
    to: destinatario,
    subject: assunto,
    text: `Ola ${nome}, ${mensagem}`,
  };

  // Envio do email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o email:', error);
      res.status(500).json({ error: 'Erro ao enviar o email' });
    } else {
      console.log('Email enviado:', info.response);
      res.json({ message: 'Email enviado com sucesso' });
    }
  });
})


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})
