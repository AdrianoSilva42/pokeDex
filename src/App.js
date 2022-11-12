import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
//   const [pichu, setPichu] = useState({
//     name: "Pichu",
//     type: "Electric",
//     evolved: true,
//     weight: 2,
//     color: 'yellow',
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
//     id: 0
// })
// const evoluirPichu = () => {
//     setPichu({
//     name: 'Pikachu',
//     type: 'Eletric',
//     envolved: true,
//     weight: 6,
//     color: 'yellow',
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
//     id: 1
//     })
// }

// const [vulpix, setVulpix] = useState({
//     name: 'Vulpix',
//     type: 'Fire',
//     envolved: true,
//     weight: 9.9,
//     color: 'orange',
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png'
// })

// const evoluirVulpix = () => {
//     setVulpix({
//     name: 'Ninetales',
//     type: 'Fire',
//     envolved: true,
//     weight: 19.9,
//     color: 'red',
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png'
//     }) 
// }

// const [bulbasaur, setBulbasaur] = useState({
//   name: 'Bulbasaur',
//   type: 'Grass & Poison',
//   envolved: true,
//   weight: 6.9,
//   color: 'MediumSpringGreen',
//   image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
// })
// const evoluirBulbasaur = () => {
//   setBulbasaur({
//     ...bulbasaur,
//     name: 'Ivysaur',
//     weight: 13.00,
//     color: 'MediumSeaGreen',
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    
//   })
// }

// const [squirtle, setSquirtle] = useState({
//   name: 'Squirtle',
//   type: 'Water',
//   envolved: true,
//   weight: 9,
//   color: '#8EC3D0',
//   image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
// })
// const evoluirSquirtle = () => {
//   setSquirtle({
//     ...squirtle,
//   name: 'Wartortle',
//   weight: 22.5,
//   color: '#6D8FBE',
//   image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
//   })
  
// }

  // Para fazer seus próximos pokemons, crie novos estados!
  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard />
      {/* <PokemonCard pokemon={vulpix} evolution={evoluirVulpix} />
      <PokemonCard pokemon={bulbasaur} evolution={evoluirBulbasaur}/>
      <PokemonCard pokemon={squirtle} evolution={evoluirSquirtle}/> */}
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
