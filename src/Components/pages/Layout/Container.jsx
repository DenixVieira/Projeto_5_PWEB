import './Container.css'

import { useLocation } from 'react-router-dom'

const Container = (props) => {

    const location = useLocation();

    return (
        <div className={(location.pathname === '/' || location.pathname === '/Register'? 'login': `pages ${props.customClass}`)}>
            
            {props.children}
        </div>
      )
}

export default Container
  