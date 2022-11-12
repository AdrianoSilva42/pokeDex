import React, {useState} from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";

    const [pichu, setPichu] = useState({
        name: "Pichu",
        type: "Electric",
        evolved: true,
        weight: 2,
        color: 'yellow',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        id: 0
    })
    const evoluirPichu = () => {
        setPichu({
        name: 'Pikachu',
        type: 'Eletric',
        envolved: true,
        weight: 6,
        color: 'yellow',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        id: 1
        })
    }
    
    

    <PokemonCard pokemon={pichu} evolution={evoluirPichu }/>

