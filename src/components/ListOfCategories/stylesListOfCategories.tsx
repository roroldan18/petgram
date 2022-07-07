import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

type Props = {
  fixed: boolean
}

export const List = styled.ul<Props>`
    display: flex;
    overflow: scroll;
    width: 100%;
    //Hide scrollbar
    -ms-overflow-style: none;   
    scrollbar-width: none;  
    &::-webkit-scrollbar {
    display: none;
  }

  ${ props => props.fixed && css `
    ${ fadeIn({time:'350ms'}) }
    background: #fff;
    border-radius: 60px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
`


export const Item = styled.li`
    padding: 0 8px;
`