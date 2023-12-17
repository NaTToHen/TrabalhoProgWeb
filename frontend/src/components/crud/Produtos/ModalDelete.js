import { useEffect } from "react"

function ModalDelete({ isOpen, setOpen, nome, id }) {
  if (isOpen) {
    return (
      <div className="fundoModal">
        <div className="container">
          <h1>Tem certeza que deseja excluir o produto: {id} - {nome}</h1>
          <div className="acoesModal">
            <button className="btnCancelar" onClick={() => setOpen(!isOpen)}>Cancelar</button>
            <button className="btnConfirmar" >Excluir</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalDelete