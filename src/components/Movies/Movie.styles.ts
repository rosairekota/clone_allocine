import Styled from "styled-components";


const blue='#341cac';
export const Wrapper = Styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 width:100%;
 //box-shadow: 12px 12px 50px -35px lightblue;
 border:0.2px solid lightblue;
 border-radius:0 0 20px 20px;
 height:100%;
 margin-top:2rem;
 transform:scale(1);
 transition: transform 550ms;
 &:hover{
    padding:0.5rem;
    transform:scale(.9);
 }
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
     
     height:100%;
     width: 100%;
     border-radius:0 0 20px 20px;


 }
 
 

.card {
    width: 100%;
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
    cursor: pointer;
   
    
    .button-primary {
      transform: translate(10px, 0);
    }
  }
}

.card__header {
  height: 150px;
  width: 100%;
  padding: 15px;
  width:100%;
  background-size:cover;
  color:#fff;
}

.card__header--title {
  text-transform: uppercase;
  margin: 0;
}

.card__body {
  background-color:#fff;
  height:45%;
}

.date {
  font-size: 11px;
  font-weight: 600;
  color: grey;
}

.body__content {
  font-size: 13px;
}
h2{
    color:#EC682A;
}

.button-primary {
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color:transparent;
  color: $blue;
  font-size: 15px;
  transition:.25s;
  
  i{
    padding-right:4px;
  }
}


.designer-link {
  color:#fff;
  text-align:center;
  fon-size: 12px;
  text-decoration: none;
  display:block;
}

 
`;
