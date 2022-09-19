import React from 'react'
import { Category } from '../Category/Category';
import { Item, List } from './stylesListOfCategories';
import { useState, useEffect } from 'react';
import database from '../../../api/db.json';

const ListOfCategoriesComponent = () => {

  const useCategories = () => {
    const [categories, setCategories] = useState<categories[] | null>(null);
    const [loading, setLoading] = useState(false);
    //Use Effect para el fetch Data
    useEffect(() => {
      setLoading(true);
      try {
        fetch('https://petgram-server-roroldan18.vercel.app/categories')
          .then( res => res.json() )
          .then(response => {
            setCategories(response);
            setLoading(false);
          })
          .catch(err => {
            console.log('Hubo un error y se cargó la base DEFAULT', err);
            setCategories(database.categories)
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }, [])
    return {categories, loading};
  }

  const [showFixed, setShowFixed] = useState(false);
  const {categories, loading} = useCategories();

  //Me rendeiza la lista de catergorias y la clase fixed se mostrará cuando pase determinada posición de scroll
  const renderList = (fixed:boolean = false) => {
    return(
    <List fixed={fixed}>
        {
          loading
          ?
          <Item key='loading'> <Category /> </Item>
          :
          (
            categories
            &&
            categories.map(category=> <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
          )
        }
    </List>)
  }

  
  //Use Effect para cambiar el estilo cuando haga scroll
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }

    document.addEventListener('scroll', onScroll);

    //Ahora hago una limpieza de memoria para que deje de escuchar el evento scroll cuando el componente se desmonte
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, [showFixed])
  
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent);