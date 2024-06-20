import { useState, useEffect } from "react"
import axios from "axios"

function FormEdit({ isOpen, id}) {
  const [categoria, setCategoria] = useState([])

  var token = localStorage.getItem('token')

  const [filme, setfilme] = useState({
    'titulo': '',
    'sinopse': '',
    'ano': '',
    'idioma': '',
    'duracao': '',
    'categoria': ''
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/crud/categorias')
      .then(response => {
        setCategoria(response.data)
      })
      .catch(error => {
        return error
      })
    axios.get(`http://localhost:8000/api/crud/filmes/${id}`)
    .then(res => {
      setfilme({...filme, ...res.data} )
    })
  }, [])

  const handleInput = (event) => {
    setfilme({
      ...filme,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post(`http://localhost:8000/api/crud/filmes/${id}`, filme, {
      headers: {
        'Authorization': `Bearer ${token}`
     }
    })
      .then(() => {
        localStorage.setItem('msg', "filme editado com sucesso")
        window.location.href = '/read'
      }).catch(() => {
        localStorage.setItem('msg', "Erro ao editar filme")
        window.location.href = '/read'
      })
  }

  if (isOpen) {
    return (
      <form className="formModal">
        <input type="hidden" name="id" value={id} />
        <input type="text" name="titulo" placeholder="titulo" onChange={handleInput} value={filme.titulo} />
        <input type="text" name="sinopse" placeholder="Sinopse" onChange={handleInput} value={filme.sinopse} />
        <input type="number" name="ano" placeholder="Ano" onChange={handleInput} value={filme.ano} />
        <input type="text" name="idioma" placeholder="Idioma" onChange={handleInput} value={filme.idioma} />
        <input type="number" name="duracao" placeholder="Duracao" onChange={handleInput} value={filme.duracao} />

        <select name="categoria" onChange={handleInput}>
          <option disabled selected>Categoria</option>
          {categoria.map(categoria => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>

        <button className="btnFormEdit" type='submit' onClick={handleSubmit}>Editar filme</button>

      </form>
    )
  }

}

export default FormEdit