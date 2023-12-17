import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

import Header from '../Header'

import './pagina_produto.css'
import ModalDelete from './ModalDelete.js'

function PaginaProduto() {

  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState('')

  var token = localStorage.getItem('token')
  if(!token) {
    window.location.href = '/'
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/crud/produto/${id}`)
      .then((response) => setData(response.data))
  }, [])

  return (
    <>
      <Header nome={`produto: ${data.nome}`} />

      <ModalDelete 
        isOpen={open}
        setOpen={setOpen}
        nome={data.nome}
        id={data.id}
      />

      <div className='containerProduto'>
        <h1 className='nomeProduto'>{data.nome}</h1>
        <div className='acoes'>
          <button className='btnEditar'>Editar Produto</button>
          <button className='btnExcluir' onClick={() => setOpen(!open)}>Excluir Produto</button>
        </div>
      </div>
    </>

  )
}

export default PaginaProduto