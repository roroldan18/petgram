//Importo GraphQl
import { gql } from '@apollo/client';


//En El template string lo que hago es enviar la query
//Es un componente de orden superior.
export const GET_PHOTOS =gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`;