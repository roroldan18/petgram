import { gql, Mutation, useMutation } from '@apollo/react-components';
import React from 'react';


const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input:$input)
    }
`

export const useRegisterMutation = () => {
    const [registerMutation, status] = useMutation(REGISTER);
    return {registerMutation, status};
};