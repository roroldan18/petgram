import React from 'react'
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

const Detail = () => {

    const params = useParams();
    let id:number|null =null;

    if (params.detailId){
        id = parseInt(params.detailId);
    };

  return (
    <>
      { 
        id 
        && 
        <Layout title={`Fotografía ${id}`}>
          <PhotoCardWithQuery id={id} />
        </Layout>
      }
    </>
  )
}

export default Detail;