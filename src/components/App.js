import React from 'react';
import PokeList from './PokeList';
import pokemons from '../data/data.json';
import '../stylesheets/App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="list__title">Mi lista de Pokemon</h2>
        <PokeList pokemons={pokemons}/>        
      </header>
    </div>
  );
}

export default App;
