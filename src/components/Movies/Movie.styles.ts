import Styled from "styled-components";



export const Wrapper = Styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 width:100%;
 border:1px solid lightblue;
 border-radius:20px;
 height:100%;
 margin-top:2rem;
.mt-2{margin-top:2rem;}
 button{
     border:0 0 20px 20px;
 }
 img{
     max-height:250px;
     object-fit:cover;
     border-radius:20px 20px 0 0;
     transform:scale(1);
     transition:transform 300ms;

     &:hover{
        transform:scale(1.05);
     }
 }
 div{
     font-family:arial;
     height:100%;
     padding:1rem;

 }
 
`;
