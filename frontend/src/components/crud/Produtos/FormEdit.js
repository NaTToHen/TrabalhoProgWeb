import { useState, useEffect } from "react"
import axios from "axios"

function FormEdit({ isOpen, setOpenEdit, id, nome, desc, idFornecedora, valor }) {
  const [fornecedora, setFornecedora] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/crud/fornecedoras')
      .then(response => {
        setFornecedora(response.data)
      })
      .catch(error => {
        return error
      })
  }, [])

  const [produto, setProduto] = useState({
    'nome': '',
    'descricao': '',
    'valor': '',
    'fornecedora': '',
 })

  const handleInput = (event) => {
    setProduto({
       ...produto,
       [event.target.name]: event.target.value
    })
 }

 function handleSubmit(event) {
    event.preventDefault()
    axios.post(`http://localhost:8000/api/crud/${id}/edit`, produto, {
    })
       .then(() => {
          localStorage.setItem('msg', "Produto cadastrado com sucesso")
          window.location.href = '/read'
       }).catch(() => {
          localStorage.setItem('msg', "Erro ao cadastrar produto")
          window.location.href = '/read'
       })
 }
  if(isOpen) {
    return (
    <form className="formModal">
      <input type="hidden" name="id" value={id} />
      <input type="text" name="nome" placeholder="Nome" onChange={handleInput} value={nome}/>
      <input type="text" name="descricao" placeholder="Descrição" onChange={handleInput} value={desc}/>
      <input type="number" name="valor" placeholder="Valor" onChange={handleInput} value={valor}/>

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