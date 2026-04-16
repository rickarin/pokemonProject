import { useState, useEffect } from "react";

function MoveItem({ url }) {
    const [moveData, setMoveData] = useState(null);

    useEffect(() => {
        // Busca os dados APENAS quando o componente aparecer na tela (Lazy Load)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMoveData(data));
    }, [url]);

    if (!moveData) return <div className="text-xs text-gray-400 animate-pulse">Carregando...</div>;

    const category = moveData.damage_class.name;

    return (
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
            <span className="capitalize font-medium">{moveData.name.replace('-', ' ')}</span>
            <div className="flex gap-2 text-xs">
                <span className="font-bold">{moveData.damage_class.name === 'status'
                    ? "Status"
                    : `${moveData.power || '0'} BP`}</span>
                <span className="text-gray-500">{moveData.pp} PP</span>
                <img src={`/categories/${category}.png`} className="w-10 h-5 object-contain" />
            </div>
        </div>
    );
}

function MovesetModal({ open, onClose, moves }) {
    if (!open) return null

    return (
        <div className="fixed inset-0 bg-black/10 z-50 flex justify-end transition-all duration-300">
            <div className="w-96 bg-white h-full overflow-y-auto p-8">
                <button
                    onClick={onClose}
                    className="bg-gray-100 hover:bg-red-500 hover:text-white px-4 py-2 mb-3 rounded-lg font-bold transition-colors duration-200"
                >
                    Fechar Modal
                </button>
                <div className="flex flex-col"> {moves.map((m) => {
                    return (
                        <MoveItem key={m.move.name} url={m.move.url} />
                    )
                })}</div>
            </div>
        </div>
    )
}

export default MovesetModal
