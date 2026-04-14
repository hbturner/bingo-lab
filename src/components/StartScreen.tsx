interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.2),_transparent_26%),radial-gradient(circle_at_80%_15%,_rgba(234,179,8,0.16),_transparent_24%),#fff0f6] p-6">
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-24 h-52 w-52 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 left-10 h-32 w-32 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="relative z-10 text-center max-w-sm">
        <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-700 shadow-sm shadow-pink-200/60">
          <span>🍭</span>
          Candy Pop Bingo
          <span>🍬</span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 sm:text-6xl">
          Bingo Mixer
        </h1>
        <p className="mt-4 text-lg text-fuchsia-700/90">
          Spark conversation with sweet, colorful bingo prompts.
        </p>
        <div className="relative mt-8 overflow-hidden rounded-[32px] border border-pink-200/70 bg-white/85 px-6 py-6 shadow-lg shadow-pink-200/30">
          <h2 className="font-semibold text-fuchsia-800 mb-3 text-lg">How to play</h2>
          <ul className="text-left text-fuchsia-700 text-sm space-y-3">
            <li>• Find people who match the candy prompts</li>
            <li>• Tap a square to collect a sweet match</li>
            <li>• Get five in a row to win and celebrate</li>
          </ul>
          <div className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
        </div>
        <button
          onClick={onStart}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_24px_60px_-32px_rgba(236,72,153,0.8)] transition duration-200 hover:scale-[1.01] active:scale-95"
        >
          Start the sweet hunt
        </button>
      </div>
    </div>
  );
}
