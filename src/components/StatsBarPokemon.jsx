import BtnMoveset from "./BtnMoveset";
import MovesetModal from "./MovesetModal";
import { useState } from "react";

function StatsBarPokemon({ stats, moves }) {
  // 1. Calculamos o total de uma vez só
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const total = stats.reduce((acc, curr) => acc + curr.base_stat, 0);

  return (
    <div className="flex flex-col gap-2 w-full mt-4">
      {/* 2. Mapeamos as barras de status */}
      {stats.map((stat) => (
        <StatBarItem key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
      ))}

      {/* 3. Renderizamos o total logo abaixo, mantendo tudo no mesmo componente */}
      <div className="flex items-center gap-3 w-full pt-3 border-t-2 border-gray-300">
        <span className="w-20 text-xs font-bold text-dark-amethyst">Total</span>
        <span className="w-8 text-xs font-bold text-dark-amethyst">{total}</span>
        <div className="flex-grow"></div>
        <BtnMoveset ativarModal={() => setModalIsOpen(true)} />
        <MovesetModal open={modalIsOpen} onClose={() => setModalIsOpen(false)} moves={moves.slice(0, 20)} />
      </div>
    </div>
  );
}

// 4. Aqui fica a lógica da barra individual (o seu "StatBar")
function StatBarItem({ name, value }) {
  const label = { 'hp': 'HP', 'attack': 'Ataque', 'defense': 'Defesa', 'special-attack': 'Atq. Esp', 'special-defense': 'Def. Esp', 'speed': 'Velocidade' }[name] || name;
  const percentage = Math.min((value / 255) * 100, 100);
  const color = value < 50 ? 'bg-red-500' : value < 90 ? 'bg-yellow-400' : 'bg-green-500';

  return (
    <div className="flex items-center gap-3 w-full">
      <span className="w-20 text-xs font-bold text-gray-700">{label}</span>
      <span className="w-8 text-xs font-bold text-gray-800">{value}</span>
      <div className="flex-grow bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className={`h-full ${color} transition-all duration-500 ease-out`} style={{ width: `${percentage}%` }} />
      </div>
      <span className="w-8 text-xs text-right text-gray-500">{value}</span>
    </div>
  );
}

export default StatsBarPokemon
