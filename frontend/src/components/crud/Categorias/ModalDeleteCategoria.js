import axios from "axios"
import ModalDelete from "../ModalDelete"
import { useNavigate } from "react-router-dom"

function ModalDeleteCategoria({ show, onHide, id }) {

  var token = localStorage.getItem('token')
  const navigate = useNavigate()

  function handleDelete() {
    axios.delete(`http://localhost:8000/api/crud/categoria/${id}`, {
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
    <ModalDelete onClose={onHide} onConfirm={handleDelete} show={show} title={"Excluir categoria"}>
      <p>Tem certeza que deseja excluir a categoria?</p>
    </ModalDelete>
  )
}

export default ModalDeleteCategoria