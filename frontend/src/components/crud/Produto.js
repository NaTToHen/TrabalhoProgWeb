function Produto(props) {

   return (
      <tr className="itemProduto" onClick={() => window.location.href = `/produto/${props.id}`}>
         <td id={props.id}>{props.id}</td>
         <td>{props.nome}</td>
         <td className="descItem">{props.descricao}</td>
         <td>{props.fornecedora}</td>
         <td>{`R$ ${props.valor}`}</td>
      </tr>
   )
}

export default Produto