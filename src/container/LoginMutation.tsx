import { gql, Mutation, useMutation } from '@apollo/react-components';
import React from 'react';


const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input:$input)
    }
`

export const useLoginMutation = () => {
    const [loginMutation, status] = useMutation(LOGIN);
    return {loginMutation, status};
};