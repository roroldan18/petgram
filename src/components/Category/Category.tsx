import React from 'react';
import { Link, Image } from './stylesCategory';


const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';  

type Props = {
    cover?: string,
    path?: string,
    emoji?: string,
}

export const Category = ({cover=DEFAULT_IMAGE, path=DEFAULT_IMAGE, emoji='?'}: Props) => {
  return (
      <Link to={path}>
          <Image src={cover} alt="imageExample" />
          {emoji}
      </Link>
  )
}