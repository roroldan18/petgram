import React from 'react'
import { PhotoCard } from '../components/PhotoCard/PhotoCard'
import { ApolloError, gql, OperationVariables } from '@apollo/client';
import { Query } from '@apollo/client/react/components';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!){
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`



type dataTypesQuery = {
    data: {photo: photo} | undefined,
    loading: boolean,
    error: ApolloError
}


const renderProp = ({data, loading, error}:checkType) => {
        const { photo } = data || {};
        if(loading) return <p>Loading...</p>;
        if(error) return <p>Error!</p>;
        return <PhotoCard {...photo} />
}


export const PhotoCardWithQuery = ({id}:Pick<photo,'id'>) =>
    <Query<dataTypesQuery, OperationVariables>  query={GET_SINGLE_PHOTO} variables={{id: id}}>
        { (data) => renderProp(data)  }
    </Query>