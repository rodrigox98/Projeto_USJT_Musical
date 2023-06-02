import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import axios from 'axios'


const CadastroPage = () => {
    const [nomeReq, setNome] = useState('')
    const [emailReq, setEmail] = useState('')
    const [senhaReq, setSenha] = useState('')

    const register = () => {
        axios.post('http://localhost:3001/usuarios', {nome : nomeReq, email: emailReq, senha: senhaReq}).then(response => {
            console.log(response)
        })
      }
    
//why the handle submit is not working??????

  return (
    <Container>
   
    <div className="formulario">
      <h2>Cadastro de Usuário</h2>
      <Form onSubmit={register}>
        {/* Campos do formulário */}
        <Form.Group controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" name="nome" value={nomeReq} onChange={(e) => {
            setNome(e.target.value)}
          } />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" name="email" value={emailReq} onChange={(e) => {
            setEmail(e.target.value) 
          }} />
        </Form.Group>
        <Form.Group controlId="senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" name="senha" value={senhaReq} onChange={(e) => {
            setSenha(e.target.value)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Cadastrar
        </Button>
      </Form>
    </div>
  </Container>
)
}


export default CadastroPage;