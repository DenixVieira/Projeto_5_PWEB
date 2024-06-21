import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState, useContext, useEffect } from "react";

import { FaUser, FaLock } from "react-icons/fa";

import "./Login.css";
import { auth } from '../../Services/FirebaseConfig';
import { useNavigate, Link } from 'react-router-dom';

import { MessageContext } from '../Context/MessageContext';


function Register() {
  const navigate = useNavigate()
  const inform = useContext(MessageContext)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);



  const handleSubmit = (event) => {
  
    event.preventDefault()
    if (repeatPassword === password && password != "" && userName != '' ) {
      createUserWithEmailAndPassword(userName, password)
    }
    else if (repeatPassword == '' || password == '' || userName == '')
      inform('Preencha todos os campos!', 'erro')
    else if (repeatPassword != password ) {
      inform('Senhas não coincidem!','erro')
    }

  }

  useEffect(() => {
    if (error) {
      if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
        inform(`Já há um usuário cadastrado com o Email: ${userName}`, 'erro')
      }
      else{
        inform(`${error.message}`, 'erro')
      }
    }
  },[loading, error])

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {   
    inform('Usuário criado com Sucesso!', 'success')
    navigate('/')
  }






  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <h1>Usuário:</h1>
        <div className="input-field">
          <input type="email" placeholder='Email: Jubileu@hotmail.com' onChange={(e) => setUserName(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className="icon"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder='Repetir senha' onChange={(e) => setRepeatPassword(e.target.value)}/>
          <FaLock className="icon"/>
        </div>
        <button>Cadastrar</button>
        <div className="signup-link">
          Já tem uma conta? <Link to='/'>Acessar!</Link>
        </div>
      </form>
    </div>
  )
}

export default Register
