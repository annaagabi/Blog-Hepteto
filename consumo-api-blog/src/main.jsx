import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// páginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
{/*  cria as rotas com path : o que sera mostrado na url para o usuario
      e element: onde sera buscado a pagina */}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
