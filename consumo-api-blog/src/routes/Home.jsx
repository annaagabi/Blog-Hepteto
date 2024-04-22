import blogFetch from '../axios/config'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
// cria a interfarce visual da home */}
// faz a solicitacao dos posts para serem mostrados para o usuario 
const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    
    try {
      
      const response = await blogFetch.get('/posts')

      const data = response.data;

      setPosts(data);

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {

    getPosts()

  }, [])
  
  return (
    <div className='home'>
      {/* caso os posts ainda estejam sendo buscados a mensagem ira informa que  apagina ainda esta carregando */}
      {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((post) => (

          <Link to={`/posts/${post._id}`} className='' key={post._id}>
            <div className='post' key={post._id}>
              <h2>{post.title}</h2>
              <p className='box-body'>
                <div className='hr'/><br />
                {post.body}
                <br /><br /><div className='hr'/>
              </p>
            </div>
          </Link>
          
        ))
      )}
    </div>
  )


}

export default Home
