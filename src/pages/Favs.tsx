import React from 'react'
import { FavsWithQuery } from '../container/GetFavs';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout/Layout';


const Favs = () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}

export default Favs;