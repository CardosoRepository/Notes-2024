export function NoteCard() {
    return (
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative pointer-events-none">
            <span className="text-sm font-medium text-slate-300">
                Há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, non dolore nemo, minima quos provident atque illo dolor
                unde, optio neque rem? Ad atque ratione voluptas voluptate
                molestiae sequi accusantium.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
    );
}
