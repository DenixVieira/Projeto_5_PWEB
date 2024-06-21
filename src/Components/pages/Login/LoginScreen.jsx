import { Outlet} from 'react-router-dom'

import ParticlesComponent from "./Background"
import Container from '../Layout/Container'

const LoginScreen = () => {
  return (
    <Container>    
      <ParticlesComponent/>
      <Outlet/>
    </Container>
  )
}

export default LoginScreen
