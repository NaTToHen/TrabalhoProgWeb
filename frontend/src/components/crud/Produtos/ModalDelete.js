import { useEffect } from "react"
import axios from "axios"

function ModalDelete({ isOpen, setOpen, nome, id }) {

  var token = localStorage.getItem('token')

  function excluirProduto(id) {
    axios.delete(`http://localhost:8000/api/crud/filmes/${id}`, {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   })
   .then(() => {
    localStorage.setItem('msg', "Filme excluido com sucesso")
    window.location.href = '/read'
  }).catch(() => {
    localStorage.setItem('msg', "Erro ao excluir filme")
    window.location.href = '/read'
  })
  }

  if (isOpen) {
    return (
      <div className="fundoModal">
        <div className="containerDelete">
          <h1 className="h1Delete">Tem certeza que deseja excluir o filme: {id} - {nome}</h1>
          <div className="acoesModal">
            <button className="btnCancelar" onClick={() => setOpen(!isOpen)}>Cancelar</button>
            <button className="btnConfirmar" onClick={() => excluirProduto(id)}>Excluir</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalDelete