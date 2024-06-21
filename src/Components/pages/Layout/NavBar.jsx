import './NavBar.css'

import { FaUserAlt } from "react-icons/fa";
import Container from './Container'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Container>
            <Link to='/Home'><FaUserAlt className='profile'/></Link>
            <ul className='list'>
              <li className='item'>
                <Link to='/Home'>Home</Link>
              </li>
              <li className='item'>
                <Link to='/Plans'>Planos</Link>
              </li>
              <li className='item'>
                <Link to='/NewPlan'>Novo Plano</Link>
              </li>
            </ul>
        </Container>
    </nav>
  )
}

export default NavBar
