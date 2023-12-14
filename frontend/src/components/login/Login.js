import '../login/login.css'
import { Link } from 'react-router-dom'

function Login() {
   return(
      <div className="loginContainer">
         <h1 className="tituloLogin">Login</h1>
         <form className="formLogin">
            
            <input placeholder="Usuario" name="Usuario" className="campoForm"/>
            <input placeholder="Senha" name="Senha" className="campoForm" type="password"/>
            <Link to={`/home`} className="linkBtnForm">
               <button type="submit" className="btnForm">Efetuar Login</button>
            </Link>
         </form>
      </div>
   )
}

export default Login