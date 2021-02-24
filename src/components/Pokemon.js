// Aquí practico con un componente funcional

import '../stylesheets/Pokemon.scss'

const Pokemon =(props)=>{
    const itemTypes = props.pokemonProp.types.map((type,index)=>{return(
        <li key={index} className="card__types--type">
            {type}
        </li>
    )});
    return(
        <article className="card">
            <img className="card__image" src={props.pokemonProp.url} alt={props.pokemonProp.name} />
            <h2 className="card__name">{props.pokemonProp.name}</h2>
            <ul className="card__types">
                {itemTypes}
            </ul>
        </article>
    )

}
export default Pokemon;