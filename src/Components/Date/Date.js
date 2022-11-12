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
    
    const [vulpix, setVulpix] = useState({
        name: 'Vulpix',
        type: 'Fire',
        envolved: true,
        weight: 9.9,
        color: 'orange',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png'
    })
    
    const evoluirVulpix = () => {
        setVulpix({
        name: 'Ninetales',
        type: 'Fire',
        envolved: true,
        weight: 19.9,
        color: 'red',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png'
        }) 
    }
    
    const [bulbasaur, setBulbasaur] = useState({
      name: 'Bulbasaur',
      type: 'Grass & Poison',
      envolved: true,
      weight: 6.9,
      color: 'MediumSpringGreen',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    })
    const evoluirBulbasaur = () => {
      setBulbasaur({
        ...bulbasaur,
        name: 'Ivysaur',
        weight: 13.00,
        color: 'MediumSeaGreen',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
        
      })
    }
    
    const [squirtle, setSquirtle] = useState({
      name: 'Squirtle',
      type: 'Water',
      envolved: true,
      weight: 9,
      color: '#8EC3D0',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    })
    const evoluirSquirtle = () => {
      setSquirtle({
        ...squirtle,
      name: 'Wartortle',
      weight: 22.5,
      color: '#6D8FBE',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
      })
      
    }

    <PokemonCard pokemon={pichu} evolution={evoluirPichu }/>

