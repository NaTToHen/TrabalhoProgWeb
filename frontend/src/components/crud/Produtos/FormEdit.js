import { useState, useEffect } from "react"
import axios from "axios"

function FormEdit({ isOpen, id}) {
  const [fornecedora, setFornecedora] = useState([])

  var token = localStorage.getItem('token')

  const [produto, setProduto] = useState({
    'nome': '',
    'descricao': '',
    'valor': '',
    'fornecedora': ''
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/crud/fornecedoras')
      .then(response => {
        setFornecedora(response.data)
      })
      .catch(error => {
        return error
      })
    axios.get(`http://localhost:8000/api/crud/produto/${id}`)
    .then(res => {
      setProduto({...produto, nome: res.data.nome, descricao: res.data.descricao, valor: res.data.valor} )
    })
  }, [])

  const handleInput = (event) => {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post(`http://localhost:8000/api/crud/produto/${id}/edit`, produto, {
      headers: {
        'Authorization': `Bearer ${token}`
     }
    })
      .then(() => {
        localStorage.setItem('msg', "Produto editado com sucesso")
        window.location.href = '/read'
      }).catch(() => {
        localStorage.setItem('msg', "Erro ao editar produto")
        window.location.href = '/read'
      })
  }
  if (isOpen) {
    return (
      <form className="formModal">
        <input type="hidden" name="id" value={id} />
        <input type="text" name="nome" placeholder="Nome" onChange={handleInput} value={produto.nome} />
        <input type="text" name="descricao" placeholder="Descrição" onChange={handleInput} value={produto.descricao} />
        <input type="number" name="valor" placeholder="Valor" onChange={handleInput} value={produto.valor} />

        <select name="fornecedora" onChange={handleInput}>
          <option disabled selected>Fornecedora</option>
          {fornecedora.map(fornecedora => (
            <option key={fornecedora.id} value={fornecedora.id}>
              {fornecedora.nome}
            </option>
          ))}
        </select>

        <button className="btnFormEdit" type='submit' onClick={handleSubmit}>Editar Produto</button>

      </form>
    )
  }

}

export default FormEdit