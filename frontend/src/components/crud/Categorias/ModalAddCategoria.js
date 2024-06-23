import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from "react-bootstrap/Form"
import { useNavigate } from 'react-router-dom'
import ModalAdd from '../ModalAdd'

function ModalAddCategoria({ show, onHide }) {
  const navigate = useNavigate()

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

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:8000/api/crud/categoria', categoriaData, {
    })
      .then(() => {
        localStorage.setItem('msg', "Categoria cadastrada com sucesso")
        navigate('/read')
      }).catch(() => {
        localStorage.setItem('msg', "Erro ao cadastrar categoria")
        navigate('/read')
      })
  }

  return (
    <ModalAdd show={show} onClose={onHide} onConfirm={handleSubmit} title={"Criar Categoria"}>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            as="input"
            autoFocus
            required
            name="nome"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleInput} name="descricao" />
        </Form.Group>
      </Form>
    </ModalAdd>
  )
}

export default ModalAddCategoria