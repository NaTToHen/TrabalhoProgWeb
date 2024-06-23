import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import Header from '../Header.js'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ModalDeleteCategoria from './ModalDeleteCategoria.js'

import '../pagina_produto.css'

function PaginaCategoria() {

  const navigate = useNavigate()

  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  var token = localStorage.getItem('token')

  // if (!token) window.location.href = '/'

  const [categoriaData, setCategoriaData] = useState({
		'nome': '',
		'descricao': ''
	})

	const handleInput = (event) => {
		setCategoriaData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value
		}))
	}

	function handleSave(event) {
		event.preventDefault()
		axios.put('http://localhost:8000/api/crud/categoria', categoriaData, {})
			.then(() => {
				localStorage.setItem('msg', "Categoria cadastrada com sucesso")
				navigate('/read')
			}).catch(() => {
				localStorage.setItem('msg', "Erro ao cadastrar categoria")
				navigate('/read')
			})
	}

  useEffect(() => {
    axios.get(`http://localhost:8000/api/crud/categorias/${id}`)
      .then((response) => setCategoriaData(response.data))
  }, [])

  return (
    <>
      <Header nome={`Categoria: ${categoriaData.nome}`} />

      <ModalDeleteCategoria
        show={open}
        onHide={() => setOpen(false)}
        nome={categoriaData.nome}
        id={categoriaData.id}
      />

      <main className='containerInfo'>
        <div className='containerHeader'>
          <h1 className='categoriaNome'>{categoriaData.nome}</h1>
          <div className='acoes'>
            <Button variant="warning" size="lg" onClick={() => setIsEditing(true)} disabled={isEditing}>Editar Categoria</Button>
            <Button variant="danger" size="lg" onClick={() => setOpen(true)}>Excluir Categoria</Button>
          </div>
        </div>

        <Form id="editForm">
					<Form.Group className="mb-3" controlId="nome">
						<Form.Label>Nome</Form.Label>
						<Form.Control
              disabled={!isEditing} 
							type="text"
							as="input"
							autoFocus
							required
							name="nome"
              value={categoriaData.nome}
							onChange={handleInput}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="descricao">
						<Form.Label>Descrição</Form.Label>
						<Form.Control disabled={!isEditing} as="textarea" rows={3} value={categoriaData.descricao} onChange={handleInput} name="descricao" />
					</Form.Group>
				</Form>
        {isEditing && (
            <Button variant="primary" size="lg" type="submit" form="editForm" onClick={handleSave} style={{alignSelf: "flex-end"}}>Salvar</Button>
          )
        }
      </main>
    </>
  )
}

export default PaginaCategoria