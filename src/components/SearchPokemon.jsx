function SearchPokemon({ inputValue, setInputValue, onSearch }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-2 border-ash-grey">
      <h3 className="text-dark-amethyst font-semibold mb-2">Qual Pokémon você quer encontrar hoje?</h3>
      
      <div className="flex flex-col gap-3">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-ash-grey rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-medium-slate transition" 
          placeholder="Ex: charmander"
        />
        
        <button 
          onClick={onSearch}
          className="bg-medium-slate text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transform transition hover:scale-105 active:scale-95 shadow-md"
        >
          Pesquisar Pokémon
        </button>
      </div>
    </div>
  );
}

export default SearchPokemon;