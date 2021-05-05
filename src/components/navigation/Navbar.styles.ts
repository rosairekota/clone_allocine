import Styled from "styled-components";
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';


export const Wrapper = Styled.header`
 //background-color:#2B2D3B;
 margin:0;
 padding:0.5rem;
 color:white;
 z-index:999;
 display:flex;
     justify-content:space-between;
     align-items:center;

  ul{
    display:flex;
     justify-content:flex-start;
     align-items:center;

    li{
    display:inline-block;
    text-underline:none;
    padding-left:5rem;
    
  }}
  div>input{
    outline:none;
    padding:0.8rem;
    border-radius:10px;
    border:0;

  }
    
  }


`;

