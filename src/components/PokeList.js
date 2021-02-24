//Aquí practico con un componente de clase

import React from 'react';
import Pokemon from './Pokemon';

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
      <div>
        <ul>{item}</ul>
      </div>
    );
  }
}

export default PokeList;
