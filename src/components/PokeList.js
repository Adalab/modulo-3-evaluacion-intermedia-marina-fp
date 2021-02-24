// Aquí practico con un componente de clase y me traigo los datos usando this.props

import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/Pokelist.scss';

class PokeList extends React.Component {
  render() {
       const item = this.props.pokemons.map((pokemonItem,i)=>{return(
        <li key={i}>
           <Pokemon pokemonProp ={pokemonItem}  />
        </li>
    )
    });
    return (
      <div className="list">
        <ul className="list__cards">{item}</ul>
      </div>
    );
  }
}

export default PokeList;
