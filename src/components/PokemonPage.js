import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searched, setSearched] = useState('')
  const [renderedPokemon, setRenderedPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemons(data)
      setRenderedPokemon(data)
    })
  }, [])

  useEffect(() => {
    const filteredPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searched.toLowerCase()))
    setRenderedPokemon(filteredPokemon)
  }, [searched])

  function handleSubmit(data) {
    const dataForm = {
      name: data.name,
      hp: data.hp,
      sprites: {
        front: data.frontUrl,
        back: data.backUrl
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataForm)
    })
    .then(res => res.json())
    .then(data => setRenderedPokemon([data, ...renderedPokemon]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search searched={searched} setSearched={setSearched}/>
      <br />
      <PokemonCollection pokemons={renderedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
