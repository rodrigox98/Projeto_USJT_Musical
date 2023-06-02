import React, {useState} from 'react'
import axios from 'axios'
import './login.css'
import {Link, useNavigate} from 'react-router-dom'

const Login2 = () => {

    const [emailReq, setEmail] = useState('')
    const [senhaReq, setSenha] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const navigate = useNavigate()
    const login = (event) => {
        event.preventDefault()
        
        axios.post('http://localhost:3001/login', {
            email: emailReq,
            senha: senhaReq
        }).then(response => {
            console.log(response)
            if(response.data.message){ 
              window.alert('Senha ou email incorretos!')
            }else{
              navigate('/search')
            }
        })
      }
        
    return(
      
      <main className="bgLogin">
          <div className="container">
            <div className="containerMenor">
              
              <img id='imagemlogo' src="https://i.imgur.com/Xqu2wjI.png" alt="" />
              <h2>MIX MUSIC</h2>
              <p>Estamos muito animados em ter você aqui!</p>
  
              <form onSubmit={login}>
                <div className="input-campo">
                  <input
                    id="email"
                    type="text"
                    placeholder="Digite seu email"
                    name="email"
                    required
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="underline"></div>
                </div>
  
                <div className="input-campo">
                  <input
                    id="senha"
                    type="password"
                    placeholder="Digite a senha"
                    name="senha"
                    required
                    autoComplete='off'
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <div className="underline"></div>
                </div>
                <button className="botao" type="submit" value="Entrar">
                  Entrar
                </button>
                <p id="txt">
                  Não tem conta?{' '}
                  <Link to="/" className="botao2">
                    {' '}
                    Cadastrar
                  </Link>{' '} 
                </p>
              </form>
            </div>
          </div>
        </main>
    )
  }
  export default Login2;