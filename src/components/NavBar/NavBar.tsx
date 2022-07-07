import React from 'react'
import { Link, Nav } from './stylesNavBar';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';


export const NavBar = () => {
    const SIZE = '32px';

  return (
    <Nav>
        <Link to='/'><MdHome size={SIZE} /></Link>
        <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
        <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}