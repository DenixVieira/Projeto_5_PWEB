import {useState , useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowLogin = (props) => {
  const location = useLocation();
  const [show, setshow] = useState(false)

  useEffect(() => {
    (location.pathname === '/' || location.pathname === '/Register'? setshow(false): setshow(true))
  },[location])

  return (
    <div>{show && props.children}</div>
  )
}

export default ShowLogin
