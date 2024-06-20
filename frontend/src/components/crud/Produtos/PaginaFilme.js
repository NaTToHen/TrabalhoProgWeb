import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

import Header from '../Header.js'
import ModalDelete from './ModalDelete.js'
import FormEdit from './FormEdit.js'

import './pagina_produto.css'

function PaginaFilme() {

  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [data, setData] = useState('')

  var token = localStorage.getItem('token')

  if (!token) window.location.href = '/'

  useEffect(() => {
    axios.get(`http://localhost:8000/api/crud/filmes/${id}`)
      .then((response) => setData(response.data))
  }, [])

  return (
    <>
      <Header nome={`Filme: ${data.titulo}`} />

      <ModalDelete
        isOpen={open}
        setOpen={setOpen}
        nome={data.titulo}
        id={data.id}
      />

      <div className='containerProduto'>
        <h1 className='nomeProduto'>{data.titulo}</h1>
        <div className='acoes'>
          <button className='btnEditar' onClick={() => setOpenEdit(!openEdit)}>Editar Filme</button>
          <button className='btnExcluir' onClick={() => setOpen(!open)}>Excluir Filme</button>
        </div>

        <FormEdit
          isOpen={openEdit}
          setOpenEdit={setOpenEdit}
          id={id}
          titulo={data.titulo}
          sinopse={data.sinopse}
          categoria={data.id_categoria}
          ano={data.ano}
        />
      </div>
    </>

  )
}

export default PaginaFilme