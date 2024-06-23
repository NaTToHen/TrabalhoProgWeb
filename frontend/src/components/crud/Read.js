import Header from "./Header.js";
import ModalAddFilme from "./Filmes/ModalAddFilme.js";
import Filme from './Filmes/Filme.js'
import Categoria from "./Categorias/Categoria.js";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

import './crud.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ModalAddCategoria from "./Categorias/ModalAddCategoria.js";

function Read() {
  var token = localStorage.getItem('token')

  const [data, setData] = useState({ filmes: [], categorias: [] })
  const [addFilme, setAddFilme] = useState(false)
  const [addCategoria, setAddCategoria] = useState(false)
  const [msg, setMsg] = useState(null);

  useEffect(() => {
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

  const [tab, setTab] = useState('filmes');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/crud/${tab}`)
        setData((prevData) => {
          return {
            ...prevData,
            [tab]: response.data
          }
        })
      } catch (error) {
        console.error(error)
      }
    }

    fetchContent()
  }, [tab])

  const renderTableHeader = (tab) => {
    switch (tab) {
      case 'filmes':
        return (
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Sinopse</th>
              <th>Idioma</th>
              <th>Categoria</th>
              <th>Ano</th>
            </tr>
          </thead>
        )
      case 'categorias':
        return (
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
        )
      default:
        return <></>
    }
  }

  const renderDataRow = (tab, props) => {
    switch (tab) {
      case 'filmes':
        return <Filme key={props.id} {...props} />
      case 'categorias':
        return <Categoria key={props.id} {...props} />
      default:
        return <></>
    }
  }

  const renderTable = (tab, data) => {
    return (<Table striped bordered hover>
      {renderTableHeader(tab)}
      <tbody>
        {!!data[tab] && data[tab].map(data => {
          return renderDataRow(tab, data)
        })}
      </tbody>
    </Table>)
  }

  return (
    <>
      <Header nome="Catálogo" />

      {msg === 'Erro ao cadastrar filme' && <div className="msgErro">{msg}</div>}
      {msg === 'filme cadastrado com sucesso' && <div className="msgSucesso">{msg}</div>}
      {msg === 'Erro ao editar filme' && <div className="msgErro">{msg}</div>}
      {msg === 'filme editado com sucesso' && <div className="msgSucesso">{msg}</div>}
      {msg === 'Erro ao excluir filme' && <div className="msgErro">{msg}</div>}
      {msg === 'filme excluido com sucesso' && <div className="msgSucesso">{msg}</div>}

      <main className="container">

        <Tabs defaultActiveKey={"filmes"} onSelect={(activeKey) => setTab(activeKey)} className="mb-3">
          <Tab eventKey="filmes" title="Filmes">
            {renderTable(tab, data)}
            <ModalAddFilme show={addFilme} onHide={() => setAddFilme(false)} />
            <Button size="lg" variant="primary" onClick={() => setAddFilme(true)} style={{ float: "right" }}>Adicionar</Button>
          </Tab>
          <Tab eventKey="categorias" title="Categorias">
            {renderTable(tab, data)}
            <ModalAddCategoria show={addCategoria} onHide={() => setAddCategoria(false)} />
            <Button size="lg" variant="primary" onClick={() => setAddCategoria(true)} style={{ float: "right" }}>Adicionar</Button>
          </Tab>
        </Tabs>

      </main>
    </>
  )
}

export default Read