import { useEffect } from "react"
import axios from "axios"

function ModalDelete({ isOpen, setOpen, nome, id }) {

  var token = localStorage.getItem('token')

  function excluirProduto(id) {
    axios.post(`http://localhost:8000/api/crud/produto/${id}/delete`, {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   })
   .then(() => {
    localStorage.setItem('msg', "Produto excluido com sucesso")
    window.location.href = '/read'
  }).catch(() => {
    localStorage.setItem('msg', "Erro ao excluir produto")
    window.location.href = '/read'
  })
  }

  if (isOpen) {
    return (
      <div className="fundoModal">
        <div className="containerDelete">
          <h1 className="h1Delete">Tem certeza que deseja excluir o produto: {id} - {nome}</h1>
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