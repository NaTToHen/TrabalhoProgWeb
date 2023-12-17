import Header from "./Header.js";
import Modal from "./Modal.js";
import Produto from './Produto.js'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Read() {
   var token = localStorage.getItem('token')

   const [data, setData] = useState([])
   const [modal, setModal] = useState(false)
   const [msg, setMsg] = useState(null);

   const toggleModal = () => {
      setModal(!modal)
   }

   if (!token) window.location.href = '/'

   useEffect(() => {
      axios.get('http://localhost:8000/api/crud/read')
         .then(response => {
            setData(response.data)
         })
         .catch(error => {
            return error
         })

      const msgModal = localStorage.getItem('msg');

      if (msgModal) {
         setMsg(msgModal);
         localStorage.removeItem('msg');
      }
   }, [])

   useEffect(() => {
      const timer = setTimeout(() => {
         setMsg(null);
      }, 5000);

      return () => clearTimeout(timer);
   }, [msg]);

   return (
      <>
         <Header
            nome="Produtos cadastrados"
         />

         {modal && <Modal ativo={modal} />}

         {msg === 'Erro ao cadastrar produto' && <div className="msgErro">{msg}</div>}
         {msg === 'Produto cadastrado com sucesso' && <div className="msgSucesso">{msg}</div>}

         <main className="container">
            <button className="btnCriar" onClick={toggleModal}>Criar Produto</button>

            <table className='tabelaProdutos' cellspacing="0" cellpadding="0">
               <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Fornecedora</th>
                  <th>Valor</th>
               </tr>
               {data.map(data => {
                  return (
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
         </main>
      </>

   )
}

export default Read