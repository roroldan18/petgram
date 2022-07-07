import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards'
import { Layout } from '../components/Layout/Layout';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';


const Home = () => {
  const { id } = useParams();

  const HomeComponent = useMemo(() => <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales domésticos muy bonitos'>
    <ListOfCategories />
    { id && <ListOfPhotoCards categoryId={parseInt(id)} />}
  </Layout>
  ,[id]);

  return HomeComponent;
}


export default Home;