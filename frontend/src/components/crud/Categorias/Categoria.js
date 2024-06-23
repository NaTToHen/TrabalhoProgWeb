import { useNavigate } from "react-router-dom"

function Categoria(props) {

  const navigate = useNavigate()

  return (
    <tr onClick={() => navigate(`/categoria/${props.id}`)}>
      <td>{props.id}</td>
      <td>{props.nome}</td>
      <td>{props.descricao}</td>
    </tr>
  )
}

export default Categoria