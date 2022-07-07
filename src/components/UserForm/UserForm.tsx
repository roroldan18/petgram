import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { Error, Form, Input, Title } from './stylesUserForm'



type Props = {
    onSubmit: ( arg: RegisterForm ) => void,
    title: string,
    error?: string,
    disabled?: boolean
}




export const UserForm:React.FC<Props> = ({onSubmit, title, error, disabled}) => {

    const email = useInputValue('');
    const password = useInputValue('');


    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      onSubmit({email: email.value, password: password.value})
    }

  return (
      <>
        <Form onSubmit={handleSubmit}>
          <Title>{title}</Title>
          <Input type="text" disabled={disabled} placeholder='Email' /* value={email.value} onChange={email.onChange} */ {...email} />
          <Input type="password" disabled={disabled} placeholder='Password' /* value={password.value} onChange={password.onChange} */ {...password} />
          <SubmitButton disabled={disabled}>{title}</SubmitButton>
        </Form>
        { error && <Error>{error}</Error> }
      </>
  )
}

