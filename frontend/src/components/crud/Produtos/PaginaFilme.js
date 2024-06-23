import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import Header from '../Header.js'
import ModalDeleteFilme from './ModalDeleteFilme.js'
import FormEdit from './FormEdit.js'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import './pagina_produto.css'

function PaginaFilme() {

  const [categorias, setCategorias] = useState([])
	const navigate = useNavigate()

  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  var token = localStorage.getItem('token')

  // if (!token) window.location.href = '/'

  useEffect(() => {
    axios.get(`http://localhost:8000/api/crud/filmes/${id}`)
      .then((response) => setFilmeData(response.data))
  }, [])

  const [filmeData, setFilmeData] = useState({
		'titulo': '',
		'sinopse': '',
		'idioma': '',
		'categoria': 0,
		'ano': 0
	})

	const handleInput = (event) => {
		setFilmeData((prevData) => ({
			...prevData,
			[event.target.name]: ["categoria", "ano"].includes(event.target.name) ? Number(event.target.value) : event.target.value
		}))
	}

	function handleSave(event) {
		event.preventDefault()
		axios.put('http://localhost:8000/api/crud/filme', filmeData, {
		})
			.then(() => {
				localStorage.setItem('msg', "Filme editado com sucesso")
				navigate('/read')
        setIsEditing(false)
			}).catch(() => {
				localStorage.setItem('msg', "Erro ao editar filme")
				navigate('/read')
			})
	}

  useEffect(() => {
    if (isEditing) {
      axios.get('http://localhost:8000/api/crud/categorias')
			.then(response => {
				setCategorias(response.data)
			})
			.catch(error => {
				return error
			})
    }

  }, [isEditing])

  return (
    <>
      <Header nome={`Filme: ${filmeData.titulo}`} />

      <ModalDeleteFilme
        show={open}
        onHide={() => setOpen(false)}
        nome={filmeData.titulo}
        id={filmeData.id}
      />

      <main className='containerInfo'>
        <div className='containerHeader'>
          <h1 className='tituloFilme'>{filmeData.titulo}</h1>
          <div className='acoes'>
            <Button variant="warning" size="lg" onClick={() => setIsEditing(true)} disabled={isEditing}>Editar Filme</Button>
            <Button variant="danger" size="lg" onClick={() => setOpen(true)}>Excluir Filme</Button>
          </div>
        </div>

        <Form id="editForm">
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              as="input"
              autoFocus
              required
              name="titulo"
              value={filmeData.titulo}
              disabled={!isEditing}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sinopse">
            <Form.Label>Sinopse</Form.Label>
            <Form.Control as="textarea" rows={3} disabled={!isEditing} value={filmeData.sinopse} onChange={handleInput} name="sinopse" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="idioma">
            <Form.Label>Idioma</Form.Label>
            <Form.Control as="input" type="text" name="idioma" value={filmeData.idioma} disabled={!isEditing} required onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Default select example" name="categoria" defaultValue={filmeData.categoria} onChange={handleInput} disabled={!isEditing}>
              <option>Abri menu de seleção</option>
              {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="ano">
            <Form.Label>Ano</Form.Label>
            <Form.Control as="input" name="ano" type="number" value={filmeData.ano} required disabled={!isEditing} onChange={handleInput} />
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

export default PaginaFilme