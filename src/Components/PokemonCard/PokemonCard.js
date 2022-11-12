import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, Imagem} from './styles'

const PokemonCard = (props) => {
      console.log(props)
  return (
    <Card color={props.pokemon.color}>
        <Imagem src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={props.evolution}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard