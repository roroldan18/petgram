import React from 'react'
import { Button } from './stylesSubmitButton';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const SubmitButton = ({children, onClick, disabled}:Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
        {children}
    </Button>
  )
}