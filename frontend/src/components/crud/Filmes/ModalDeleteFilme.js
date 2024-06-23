import axios from "axios"
import { useNavigate } from "react-router-dom"
import ModalDelete from "../ModalDelete"

function ModalDeleteFilme({ show, onHide, id }) {

  var token = localStorage.getItem('token')
  const navigate = useNavigate()

  function handleDelete() {
    axios.delete(`http://localhost:8000/api/crud/filmes/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      localStorage.setItem('msg', "Filme excluido com sucesso")
      navigate('/read')
    }).catch(() => {
      localStorage.setItem('msg', "Erro ao excluir filme")
      navigate('/read')
    })
  }

  return (
    <ModalDelete onClose={onHide} onConfirm={handleDelete} show={show} title={"Excluir filme"}>
      <p>Tem certeza que deseja excluir o filme?</p>
    </ModalDelete>
  )
}

export default ModalDeleteFilme