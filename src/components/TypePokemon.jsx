function TypePokemon ({pokemonData}) {
        const typeColors = {
        normal:   "bg-type-normal",
        fire:     "bg-type-fire",
        water:    "bg-type-water",
        electric: "bg-type-electric",
        grass:    "bg-type-grass",
        ice:      "bg-type-ice",
        fighting: "bg-type-fighting",
        poison:   "bg-type-poison",
        ground:   "bg-type-ground",
        flying:   "bg-type-flying",
        psychic:  "bg-type-psychic",
        bug:      "bg-type-bug",
        rock:     "bg-type-rock",
        ghost:    "bg-type-ghost",
        dragon:   "bg-type-dragon",
        dark:     "bg-type-dark",
        steel:    "bg-type-steel",
        fairy:    "bg-type-fairy",
    };

    return (
            <div className="flex flex-wrap gap-2">
                {pokemonData.map((tipo) => {
                    const typeName = tipo.type.name;
                    const colorClass = typeColors[typeName] ?? "bg-gray-400";

                    return (
                        <span key={typeName} className="flex items-center rounded-lg overflow-hidden border border-gray-200">
                            <div className={`${colorClass} p-2 flex items-center justify-center`}>
                                <img 
                                    src={`/icons/${typeName}.svg`} 
                                    alt={`Ícone do tipo ${typeName}`}  
                                    className="w-6 h-6 "
                                />
                            </div>
                            <span className="bg-background-type text-white font-bold px-4 py-2 capitalize">
                                {typeName}
                            </span>
                        </span>
                    );
                })}
            </div>
        );


}

export default TypePokemon