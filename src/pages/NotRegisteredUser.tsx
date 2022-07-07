import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { UserForm } from '../components/UserForm/UserForm';
import { useLoginMutation } from '../container/LoginMutation';
import { useRegisterMutation } from '../container/RegisterMutation';
import { AuthContext } from '../Context';



const NotRegisteredUser = () => {

  const {registerMutation, status} = useRegisterMutation();
  const {error:errorRegister, loading:loadingRegister} = status;

  const {loginMutation, status: statusLogin} = useLoginMutation();
  const {error:errorLogin, loading:loadingLogin} = statusLogin;

  const { activateAuth } = useContext(AuthContext);
  
  
  const handleRegister=({email, password}:checkType) => {
    const input = {email, password}
    const variables = { input };
    registerMutation({variables}).then(({data}) => {
      const {signup} = data;
      activateAuth(signup);
    });
  }

  const handleLogin=({email, password}:checkType) => {
    const input = {email, password}
    const variables = { input };
    loginMutation({variables}).then(({data}) => {
      const { login } = data;
      activateAuth(login);
    });
  }

  const errorMsgRegister = errorRegister && 'Error al registrarse';
  const errorMsgLogin = errorLogin && 'Error al loguearse';

  return (
      <>
        <UserForm  error={errorMsgRegister} disabled={loadingRegister} onSubmit={handleRegister} title='Registrarse' />
        <UserForm error={errorMsgLogin} disabled={loadingLogin} onSubmit={handleLogin} title='Iniciar Sesión' />
      </>
  )
}

export default NotRegisteredUser;