function Produto(props) {

   var valor = props.valor
   var formatado = valor.toFixed(2)
   
   return (
      <tr className="itemProduto" onClick={() => window.location.href = `/produto/${props.id}`}>
         <td id={props.id}>{props.id}</td>
         <td>{props.nome}</td>
         <td className="descItem">{props.descricao}</td>
         <td>{props.fornecedora}</td>
         <td>{`R$ ${formatado}`}</td>
      </tr>
   )
}

export default Produto