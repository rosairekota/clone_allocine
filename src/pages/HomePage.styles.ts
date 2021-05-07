import Styled from 'styled-components';

export const Wrapper = Styled.div`
h2{
    color:#EC682A;
}

.pagination {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width:50%;
  cursor: pointer;
}

.pagination a {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightblue;;
  color: #EC682A;
  
}

.pagination__link {
  font-weight: bold;
}

.pagination__link--active a {
  color: #fff;
  background: #EC682A;
}

.pagination__link--disabled a {
  color: lightblue;
  border: 1px solid lightblue;;
}
.grid-container{
    margin-bottom:3rem;
}


`
