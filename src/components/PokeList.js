//Aquí practico con un componente de clase

import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/Pokelist.scss';

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemons);
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
