import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  {/* retorna o app*/}
  return (
    <div className='App'>
      {/*  retorna  a barra de navegacao */}
      <Navbar />
      <div className='container'>
        {/*retorna as infromacoes dos posts */}
        <Outlet/>
      </div>
    </div>
  )
}

export default App
