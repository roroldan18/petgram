import React, { useEffect, useRef, useState } from 'react'
import { Article, Img, ImgWrapper } from './stylesPhotoCard';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import '../../utils/types.ts';
import { FavButton } from '../favButton/FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from 'react-router-dom';


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({id, likes=0, src=DEFAULT_IMAGE}: Partial<photo>) => {

    const key = `like-${id}`;

    // ------- Utilizo mis custom hook  ------- 

    //1. El near Screen
    const [show, ref] = useNearScreen();
    //2. el Local Storage
    const [liked, setLiked] = useLocalStorage(key, false);




  return (
    <Article ref={ref}>
        {
            show 
            &&
            <>
            
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} alt="Image" />
                    </ImgWrapper>
                </Link>
                <ToggleLikeMutation>
                    {
                        (toggleLike:checkType)=>{
                            const handleFavButton = () => {
                                !liked && toggleLike({variables: {
                                    input: { id }
                                }});
                                setLiked(!liked)
                            };
                            return <FavButton liked={liked} likes={likes} onClick={handleFavButton} />
                        }
                    }
                </ToggleLikeMutation>
            </>
        }
    </Article>
  )
}