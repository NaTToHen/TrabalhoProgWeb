function Categoria(props) {
   
    return (
       <tr className="itemProduto" onClick={() => window.location.href = `/categoria/${props.id}`}>
          <td id={props.id}>{props.id}</td>
          <td>{props.nome}</td>
          <td className="descItem">{props.descricao}</td>
       </tr>
    )
 }
 
 export default Categoria