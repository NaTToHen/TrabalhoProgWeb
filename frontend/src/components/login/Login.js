import '../login/login.css'
//import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

function Login() {

   var token = localStorage.getItem('token')
   if(token) {
      window.location.href = '/read'
   }

   const [login, setLogin] = useState({
      'user': '',
      'password': ''
   })

   const [error, setError] = useState('');

   const handleInput = (event) => {
      setLogin({
         ...login,
         [event.target.name]: event.target.value
      })
   }

   function handleSubmit(event) {
      event.preventDefault()
      axios.post('http://localhost:8000/api/login', login, {
         headers: {
            'Authorization': 'Bearer '
         }
      })
         .then((res) => {
            if(res.data) {
               localStorage.setItem('token', res.data)
               window.location.href = '/read'
            }
         }).catch((err) => {
            setError('Usuário ou senha inválida')
         })
   }

   return (
      <div className="loginContainer">

         {error && <div className='msgErro'>{error}</div>}

         <h1 className="tituloLogin">Login</h1>
         <form className="formLogin" onSubmit={handleSubmit}>
            <input
               placeholder="Usuario"
               name="user"
               className="campoForm"
               onChange={handleInput} />

            <input
               placeholder="Senha"
               name="password"
               className="campoForm"
               type="password"
               onChange={handleInput} />

            <button type="submit" className="btnForm">Efetuar Login</button>
         </form>
      </div>
   )
}
export default Login