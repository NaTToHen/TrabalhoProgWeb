import './crud.css'

function Header(props) {
   const deslogar = () => {
      localStorage.removeItem("token")
      window.location.href = '/'
   }

   return (
      <header className="topoCrud">
         <div className="nomeHeader">{props.nome}</div>
         <div className='acoesHeader'>
            <button className="btnHome" onClick={() => window.location.href = "/read"}>Home</button>
            <button className="btnDeslogar" onClick={deslogar}>Deslogar</button>
         </div>
         
      </header>
   )
}

export default Header