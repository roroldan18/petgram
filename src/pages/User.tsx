import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton/SubmitButton';
import { AuthContext } from '../Context';



const User = () => {
  const {removeAuth} = useContext(AuthContext);

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}

export default User;