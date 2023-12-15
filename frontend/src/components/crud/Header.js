import './crud.css'

function Header(props) {
   const deslogar = () => {
      localStorage.removeItem("token")
      window.location.href = '/'
   }

   return (
      <header className="topoCrud">
         <div className="nomeHeader">{props.nome}</div>
         <button className="btnDeslogar" onClick={deslogar}>Deslogar</button>
      </header>
   )
}

export default Header