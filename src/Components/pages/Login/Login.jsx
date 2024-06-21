import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import "./Login.css";
import { auth } from '../../Services/FirebaseConfig';
import { MessageContext } from '../Context/MessageContext';

function Login() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState('')
  const [err, seterr] = useState('')
  const inform = useContext(MessageContext)
  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName != '' && password != '') {
      signInWithEmailAndPassword(userName, password)

    }
  }

  useEffect(() => {
    if (error) {
      console.log(error.message)
      if (error.message == 'Firebase: Error (auth/invalid-credential).'){
        inform('Usuário ou senha incorretos!','erro')
      }
      else if (error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
        inform('Quantidade de tentativas excedidas! resete sua senha ou tente novamente mais tarde.','erro')
      }
      else{
        console.log(error.message)
        inform(`${error.message}`, 'erro')
      }
    }
  },[loading, error])

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
  }
  if (user) {
    inform('Bem Vindo!', 'success')
    navigate('/Home')
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <h1>Bem Vindo!</h1>
        <div className="input-field">
          <input type="email" placeholder='Email: Jubileu@hotmail.com' onChange={(e) => setUserName(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" />
            lembre-se de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
        <div className="signup-link">
          Não tem uma conta? <Link to='/Register'>Cadastre-se</Link>
        </div>

      </form>
    </div>
  )
}

export default Login
