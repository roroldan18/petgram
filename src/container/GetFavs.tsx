import { gql } from '@apollo/client'
import { Query } from '@apollo/react-components'
import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`


const renderProp = ({loading, error, data}:checkType) => {
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    const{favs}  = data;
    
    return <ListOfFavs favs={favs} />

}

export const FavsWithQuery = () => <Query query={GET_FAVS} fetchPolicy='network-only'>
        {renderProp}
    </Query>