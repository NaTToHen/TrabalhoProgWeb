function Produto(props) {
   return(
      <tr className="itemProduto">
         <td>{props.id}</td>
         <td>{props.nome}</td>
         <td className="descItem">{props.descricao}</td>
         <td>{props.fornecedora}</td>
         <td>{`R$ ${props.valor}`}</td>
      </tr>
   )
}

export default Produto