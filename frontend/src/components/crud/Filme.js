import { useNavigate } from "react-router-dom"

function Filme(props) {

   const navigate = useNavigate()
   
   return (
      <tr className="itemProduto" onClick={() => navigate(`/filme/${props.id}`)}>
         <td id={props.id}>{props.id}</td>
         <td>{props.titulo}</td>
         <td className="descItem">{props.sinopse}</td>
         <td>{props.idioma}</td>
         <td>{props.categoria}</td>
         <td>{props.ano}</td>
      </tr>
   )
}

export default Filme