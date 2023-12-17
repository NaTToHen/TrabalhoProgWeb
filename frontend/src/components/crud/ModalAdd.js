import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ModalAdd({ isOpen, setOpenAdd }) {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get('http://localhost:8000/api/crud/fornecedoras')
         .then(response => {
            setData(response.data)
         })
         .catch(error => {
            return error
         })
   }, [])

   const [produto, setProduto] = useState({
      'nome': '',
      'descricao': '',
      'valor': '',
      'fornecedoras': '',
   })

   const handleInput = (event) => {
      setProduto({
         ...produto,
         [event.target.name]: event.target.value
      })
   }

   function handleSubmit(event) {
      event.preventDefault()
      axios.post('http://localhost:8000/api/crud/create', produto, {
      })
         .then(() => {
            localStorage.setItem('msg', "Produto cadastrado com sucesso")
            window.location.href = '/read'
         }).catch(() => {
            localStorage.setItem('msg', "Erro ao cadastrar produto")
            window.location.href = '/read'
         })
   }

   if (isOpen) {
      return (
         <div className="fundoModal">
            <div className="addModal">

               <button className="fecharModal" onClick={() => setOpenAdd(!isOpen)}>Cancelar</button>

               <form className="formModal">
                  <input type="text" name="nome" placeholder="Nome" onChange={handleInput} />
                  <input type="text" name="descricao" placeholder="Descrição" onChange={handleInput} />
                  <input type="number" name="valor" placeholder="Valor" onChange={handleInput} />

                  <select name="fornecedora" onChange={handleInput}>
                     <option disabled selected>Fornecedora</option>
                     {data.map(fornecedora => (
                        <option key={fornecedora.id} value={fornecedora.id}>
                           {fornecedora.nome}
                        </option>
                     ))}
                  </select>

                  <button className="btnFormModal" type='submit' onClick={handleSubmit}>Cadastrar Produto</button>

               </form>
            </div>
         </div>
      )
   }
}

export default ModalAdd