//Aquí practico con un componente funcional

const Pokemon =(props)=>{
    const itemTypes = props.pokemonProp.types.map((type,index)=>{return(
        <li key={index} className="types">
            {type}
        </li>
    )});
    return(
        <article>
            <img src={props.pokemonProp.url} alt={props.pokemonProp.name} />
            <h2>{props.pokemonProp.name}</h2>
            <h4>Types</h4>
            <ul>
                {itemTypes}
            </ul>
        </article>
    )

}
export default Pokemon;