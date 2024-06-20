function Filme(props) {
   
   return (
      <tr className="itemProduto" onClick={() => window.location.href = `/filme/${props.id}`}>
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