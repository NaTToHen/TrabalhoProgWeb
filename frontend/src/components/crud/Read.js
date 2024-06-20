import Header from "./Header.js";
import ModalAdd from "./ModalAdd.js";
import Filme from './Filme.js'

import './crud.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Read() {
   var token = localStorage.getItem('token')

   const [data, setData] = useState([])
   const [openAdd, setOpenAdd] = useState(false)
   const [msg, setMsg] = useState(null);
   const [valorTotal, setValorTotal] = useState([])

   if (!token) window.location.href = '/'

   useEffect(() => {
      axios.get('http://localhost:8000/api/crud/filmes')
         .then(response => {
            setData(response.data)
         })
         .catch(error => {
            return error
         })

      const msgModal = localStorage.getItem('msg')

      if (msgModal) {
         setMsg(msgModal)
         localStorage.removeItem('msg')
      }
   }, [])

   useEffect(() => {
      const timer = setTimeout(() => {
         setMsg(null)
      }, 5000)

      return () => clearTimeout(timer)
   }, [msg])

   return (
      <>
         <Header
            nome="Filmes Cadastrados"
         />

         {msg === 'Erro ao cadastrar filme' && <div className="msgErro">{msg}</div>}
         {msg === 'filme cadastrado com sucesso' && <div className="msgSucesso">{msg}</div>}
         {msg === 'Erro ao editar filme' && <div className="msgErro">{msg}</div>}
         {msg === 'filme editado com sucesso' && <div className="msgSucesso">{msg}</div>}
         {msg === 'Erro ao excluir filme' && <div className="msgErro">{msg}</div>}
         {msg === 'filme excluido com sucesso' && <div className="msgSucesso">{msg}</div>}

         <ModalAdd isOpen={openAdd} setOpenAdd={setOpenAdd}/>

         <main className="container">
            <button className="btnCriar" onClick={() => setOpenAdd(!openAdd)}>Criar Filme</button>

            <table className='tabelaFilmes' cellspacing="0" cellpadding="0">
               <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Sinopse</th>
                  <th>Idioma</th>
                  <th>Categoria</th>
                  <th>Ano</th>
               </tr>
               {data.map(data => {
                  return (
                     <Filme
                        id={data.id}
                        titulo={data.titulo}
                        sinopse={data.sinopse}
                        idioma={data.idioma}
                        categoria={data.categoria_nome}
                        ano={data.ano}
                     />
                  )
               })}
            </table>
         </main>
      </>
   )
}

export default Read