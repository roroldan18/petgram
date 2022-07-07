import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './stylesFavButton';


type Props = {
    liked: boolean | undefined;
    likes: number;
    onClick: () => void;
}

export const FavButton = ({liked, likes, onClick}:Props) => {

    //Renderizo Iconos dependiendo el estado de likes
    const Icon = liked ? MdFavorite : MdFavoriteBorder;


  return (
    <Button onClick={onClick}>
        <Icon size='32px' /> {likes}  likes!
    </Button>
  )
}