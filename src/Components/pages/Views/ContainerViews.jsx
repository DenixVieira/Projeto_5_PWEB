import Container from "../Layout/Container"
import { Outlet } from "react-router-dom"

const ContainerViews = () => {
  return (
    <Container customClass='min_height'>
        <Outlet/>
    </Container>
  )
}

export default ContainerViews
