import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard';

//Import GraphQl
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../HOC/withPhotos';


export const ListOfPhotoCards:React.FC<Pick<photo, 'categoryId'>> = ( {categoryId} ) => {
  //Uso el Hook de Graphql
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  const photos: photo[] = data?.photos;

  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;

  
  return (
    <ul>
        {
            photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)
        }
    </ul>
  )
}
