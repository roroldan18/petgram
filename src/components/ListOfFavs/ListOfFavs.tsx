import React from 'react'
import { Grid, Image, Link } from './stylesListOfFavs'

type Props = {
    favs?: photo[]
}

export const ListOfFavs = ({favs = []}:Props) => {
  return <Grid>
    {
    favs.map((fav:photo) => <Link key={fav.id} to={`/detail/${fav.id}`} >
        <Image  src={fav.src} /> 
    </Link>)
    }  
  </Grid>
}