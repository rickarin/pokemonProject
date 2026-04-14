// StatBar.js

// Dicionário de tradução
const statLabels = {
  'hp': 'HP',
  'attack': 'Ataque',
  'defense': 'Defesa',
  'special-attack': 'Atq. Esp',
  'special-defense': 'Def. Esp',
  'speed': 'Velocidade'
};

/**
 * Retorna a classe de cor baseada no valor do status
 */
function getStatColor(value) {
  if (value < 50) return 'bg-red-500';      // Baixo
  if (value < 90) return 'bg-yellow-400';   // Médio
  return 'bg-green-500';                    // Alto
}

/**
 * Cria e retorna o elemento da barra de status
 * @param {string} name - Nome da estatística (ex: 'hp')
 * @param {number} value - Valor numérico
 */
export function createStatBar(name, value) {
  const label = statLabels[name] || name;
  const percentage = Math.min((value / 255) * 100, 100); // 255 é o máx possível na série

  const container = document.createElement('div');
  container.className = 'flex items-center gap-4 w-full my-2';
  
  container.innerHTML = `
    <span class="w-20 text-sm font-bold text-gray-700">${label}</span>
    <div class="flex-grow bg-gray-200 rounded-full h-3 overflow-hidden">
      <div 
        class="h-full ${getStatColor(value)} transition-all duration-500 ease-out" 
        style="width: ${percentage}%"
      ></div>
    </div>
    <span class="w-8 text-sm font-mono text-gray-500">${value}</span>
  `;
  
  return container;
}