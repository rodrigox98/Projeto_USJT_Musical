import React, {useState} from 'react'
import './cadastraUsuario2.css'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'


const CadastraUsuario2 = () => {
    const navigate = useNavigate()
    const [nomeReq, setNome] = useState('')
    const [emailReq, setEmail] = useState('')
    const [senhaReq, setSenha] = useState('')

    const register = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/usuarios', {
            nome : nomeReq, 
            email: emailReq, 
            senha: senhaReq}).then(response => {
            console.log(response)
        })
        navigate('/login')
}
return(
<main className="bgCadastro">
        <div className="container">
          <div className="containerMenor">
              <img id='imagemlogo' src="https://i.imgur.com/Xqu2wjI.png" alt="" /> 
              <h1>Bem vindo</h1>
            <h2>Cadastre-se</h2>
            <form onSubmit={register}>
              <section>
                <div className="input-campo">
                  <label htmlFor="">Nome</label>
                  <input
                    value={nomeReq}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Digite seu Nome"
                    name="nome"
                    required
                    autoComplete='off'
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-campo">
                  <label htmlFor="">E-mail:</label>
                  <input
                    value={emailReq}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Digite seu E-mail"
                    name="email"
                    required
                    autoComplete='off'
                  />
                  <div className="underline"></div>
                </div>
                <div className="input-campo">
                  <label htmlFor="">Senha:</label>
                  <input
                    value={senhaReq}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="Digite sua Senha"
                    name="senha"
                    required
                  />
                  <div className="underline"></div>
                </div>
                {/*<div className="input-campo">
                                    <label htmlFor="">Confirmar Senha:</label>
                                    <input value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} type="password" placeholder='Confirme sua senha' name='confirmarSenha' required />
                                    <div className='underline'></div>
                                </div>*/}
              </section>
              <button className="botao" type="submit">
                Cadastrar
              </button>
              <p id="txt">
                  Já Possui uma conta?{' '}
                  <Link to="login" className="botao2">
                    {' '}
                    Então faça Login
                  </Link>{' '} 
                </p>
            </form>
          </div>
        </div>
      </main>
    )
}

export default CadastraUsuario2;