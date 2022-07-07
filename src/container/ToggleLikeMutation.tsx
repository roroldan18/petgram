import React from 'react';
import { gql } from '@apollo/client';
import { Mutation } from '@apollo/react-components';

const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!){
        likePhoto(input: $input){
            id,
            liked,
            likes
        }
    }
`


export const ToggleLikeMutation = ({children}:checkType) => {
    return <Mutation mutation={LIKE_PHOTO}>
        {children}
    </Mutation>
}