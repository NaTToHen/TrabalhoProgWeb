import { useNavigate } from "react-router-dom"

function Filme(props) {

  const navigate = useNavigate()

  return (
    <tr style={{cursor: "pointer"}} onClick={() => navigate(`/filme/${props.id}`)}>
      <td>{props.id}</td>
      <td>{props.titulo}</td>
      <td>{props.sinopse}</td>
      <td>{props.idioma}</td>
      <td>{props.categoria}</td>
      <td>{props.ano}</td>
    </tr>
  )
}

export default Filme