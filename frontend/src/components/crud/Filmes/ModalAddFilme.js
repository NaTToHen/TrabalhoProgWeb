import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from "react-bootstrap/Form"
import { useNavigate } from 'react-router-dom'
import ModalAdd from '../ModalAdd'

function ModalAddFilme({ show, onHide }) {
	const [categorias, setCategorias] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		axios.get('http://localhost:8000/api/crud/categorias')
			.then(response => {
				setCategorias(response.data)
			})
			.catch(error => {
				return error
			})
	}, [])

	const [filmeData, setFilmeData] = useState({
		'titulo': '',
		'sinopse': '',
		'idioma': '',
		'duracao': 200,
		'categoria': 0,
		'ano': 0
	})

	const handleInput = (event) => {
		setFilmeData((prevData) => ({
			...prevData,
			[event.target.name]: ["categoria", "ano"].includes(event.target.name) ? Number(event.target.value) : event.target.value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault()
		axios.post('http://localhost:8000/api/crud/filmes', filmeData, {
		})
			.then(() => {
				localStorage.setItem('msg', "Filme cadastrado com sucesso")
				navigate('/read')
			}).catch(() => {
				localStorage.setItem('msg', "Erro ao cadastrar filme")
				navigate('/read')
			})
	}

	return (
		<ModalAdd show={show} onClose={onHide} onConfirm={handleSubmit} title={"Criar Filme"}>
			<Form>
				<Form.Group className="mb-3" controlId="titulo">
					<Form.Label>Título</Form.Label>
					<Form.Control
						type="text"
						as="input"
						autoFocus
						required
						name="titulo"
						onChange={handleInput}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="sinopse">
					<Form.Label>Sinopse</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={handleInput} name="sinopse" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="idioma">
					<Form.Label>Idioma</Form.Label>
					<Form.Control as="input" type="text" name="idioma" required onChange={handleInput} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="categoria">
					<Form.Label>Categoria</Form.Label>
					<Form.Select aria-label="Default select example" name="categoria" onChange={handleInput}>
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
					<Form.Control as="input" name="ano" type="number" required onChange={handleInput} />
				</Form.Group>
			</Form>
		</ModalAdd>
	)
}

export default ModalAddFilme