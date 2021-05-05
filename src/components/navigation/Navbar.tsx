import React from 'react';
import { Wrapper } from "./Navbar.styles";

const Navbar=()=> {
  return (
    <Wrapper>
       <ul>
        <li>Accueil</li>
        <li>Films</li>
        <li>Series</li>
      </ul>
      <div className="input">
        <input type="text" placeholder="rechercher un film..."/>
      </div>
    </Wrapper>
  );
}

export default Navbar;