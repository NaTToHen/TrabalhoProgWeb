import Header from "./Header.js";
//import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Produto from './Produto.js'

function Read() {
   var token = localStorage.getItem('token')
   const [data, setData] = useState([]);

   if(!token) window.location.href = '/'

   useEffect(() => {
      axios.get('http://localhost:8000/api/crud/read')
         .then(response => {
            setData(response.data)
         })
         .catch(error => {
            return error
         })
   }, [])

   return (
      <>
         <Header
            nome="Produtos cadastrados"
         />

         <button className="btnCriar">Criar Produto</button>
         <table className='tabelaProdutos' cellspacing="0" cellpadding="0">
            <tr>
               <th>Id</th>
               <th>Nome</th>
               <th>Descrição</th>
               <th>Fornecedora</th>
               <th>Valor</th>
            </tr>
            {data.map(data => {
               return(
                  <Produto
                     id={data.id}
                     nome={data.nome}
                     descricao={data.descricao}
                     fornecedora={data.fornecedora}
                     valor={data.valor}
                  />
               )
            })}
         </table>
      </>
      
   )
}

export default Read