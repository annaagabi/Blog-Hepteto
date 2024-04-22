import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewPost.css'
// cria a interface da pagina para adicionar um novo post 
const NewPost = () => {

  const navigate = useNavigate()


  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()

    await blogFetch.post('/posts', 
    { title, body })

    navigate('/')
  }
  // retorna a interface da pagina para adicionar um novo post*
  return (
    <div className='new-post'>

          <h2>Novo post</h2>
           {/*  cria um fromulario de solicitaçao dos dados do novo post */}
            <form onSubmit={(e) => createPost(e)}>
              <div className='form-control'>
                {/*  solicitacao do title do post*/}
                <input  type='text' 
                        name='title' 
                        id='title' 
                        placeholder='Digite o título'
                        onChange={(e) => setTitle(e.target.value)}
                />
                {/* solicitacao do body do post */}
                <textarea name='body' 
                        id='body' 
                        placeholder='Digite o conteúdo'
                        onChange={(e) => setBody(e.target.value)}
                        rows={5}
                />
                <input type='submit' value='Postar' className='postar-btn' />
              </div>
            </form>

    </div>
  )
}

export default NewPost
