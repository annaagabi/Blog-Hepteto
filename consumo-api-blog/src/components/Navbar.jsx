import { Link } from "react-router-dom"

import './Navbar.css'
 //  cria a barra de navegaçao no header 
 //  todos os elementos redirecionam para um link especifico
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
          <Link to={`/`}>BLOG HEPTETO</Link>
        </h2>
        <ul>
          <li>
            <Link to={`/`} className='menu-btn'>Home</Link>
          </li>
          <li>
            <Link to={`/new`} className='menu-btn'>Novo Post</Link>
          </li>
          <li>
            <Link to={`https://github.com/Hepteto`} className='menu-btn'>GitHub</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
