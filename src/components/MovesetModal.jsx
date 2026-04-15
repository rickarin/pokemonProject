function MovesetModal ({open, onClose, moves}) {
    if (!open) return null

    return (
        <div className="fixed inset-0 bg-black/10 z-50 flex justify-end transition-all duration-300">
            <div className="w-80 bg-white h-full p-8">
                <button onClick={onClose} className="text-red-500 font-bold">Fechar</button>
                <p> {moves.map((m) => { return (
                    <span>{m.move.name}</span>
                )})}</p>
            </div>
        </div>
    )
}

export default MovesetModal