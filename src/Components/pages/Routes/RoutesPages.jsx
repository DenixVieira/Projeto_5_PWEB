import { useRoutes, Navigate} from "react-router-dom"
import { useState } from "react"

import { MessageProvider } from "../Context/MessageContext"
import Container from "../Layout/Container"
import NavBar from "../Layout/NavBar"
import Footer from "../Layout/Footer"
import ShowLogin from "./ShowLogin"

import Home from "../Views/Home"
import LoginScreen from "../Login/LoginScreen"
import Plans from "../Views/Plans"
import NewPlan from "../Views/NewPlan"
import Login from "../Login/Login"
import Register from "../Login/Register"


function RoutePages() {
  const [auth, setAuth] = useState(true)

  const routes = useRoutes([
    {
      path: '/',
      element: <LoginScreen />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/Register',
          element: <Register />
        },
      ]
    },
    {
      path: '/Home',
      element: auth ? <Home /> : <Navigate to={'/'} replace />
    },
    {
      path: '/Plans',
      element: <Plans />,
    },
    {
      path: '/NewPlan',
      element: <NewPlan />
    },
  ])


  return (
    <MessageProvider>
      <ShowLogin>
        <NavBar />
      </ShowLogin>
      <Container customClass='min_height'>
        {routes}
      </Container>
      <ShowLogin>
        <Footer />
      </ShowLogin>
    </MessageProvider>
  )
}

export default RoutePages