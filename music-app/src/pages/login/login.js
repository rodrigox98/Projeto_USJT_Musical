import React, {useState} from 'react'
import { Container,Form, Button } from 'react-bootstrap';
import axios from 'axios'  


const Login = () => {

    const [verificaEmail, setVerificaEmail] = useState("")
    const [verificaSenha, setVerificaSenha] = useState("")
    
    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: verificaEmail, 
            senha: verificaSenha
        }).then(response => {
            console.log(response)
        })}
    
    return(
        <Container>
    {/* ... Resto do código da página ... */}
    <div className="formulario">
      <h2>Cadastro de Usuário</h2>
      <Form onSubmit={login}>
        {/* Campos do formulário */}
        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" name="email" value={verificaEmail} onChange={(e) => {
            setVerificaEmail(e.target.value) 
          }} />
        </Form.Group>
        <Form.Group controlId="senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" name="senha" value={verificaSenha} onChange={(e) => {
            setVerificaSenha(e.target.value)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Login
        </Button>
      </Form>
    </div>
  </Container>
    )
}

export default Login;