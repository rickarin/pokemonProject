import { useState } from "react";
import FetchPokemon from "./services/FetchPokemon";
import SearchPokemon from "./components/searchPokemon";
import TypePokemon from "./components/TypePokemon";
import StatsBarPokemon from "./components/StatsBarPokemon";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    const data = await FetchPokemon(inputValue);
    setPokemonData(data);
  };

  return (
    <div className="bg-lavender-mist min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-dark-amethyst mb-8 tracking-tight">
        Pokedex Hub
      </h1>

      <SearchPokemon 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        onSearch={handleSearch} 
      />

      {pokemonData && (
        <div className="mt-10 w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border-2 border-ash-grey flex flex-col items-center gap-6">
          <img 
            src={pokemonData.sprites.front_default} 
            alt={pokemonData.name} 
            className="w-40 h-40 object-contain bg-lavender-mist rounded-full p-2 border-2 border-ash-grey"
          />
          <h2 className="text-3xl font-bold text-center text-dark-amethyst tracking-tight capitalize">
            {pokemonData.name}
          </h2>
        <TypePokemon pokemonData={pokemonData.types}/>

        <StatsBarPokemon stats={pokemonData.stats}/>
        </div>
      )}
    </div>
  );
}

export default App;