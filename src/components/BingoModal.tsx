interface BingoModalProps {
  onDismiss: () => void;
}

const confettiDrops = [
  { left: '8%', delay: '0s', color: 'bg-pink-300' },
  { left: '18%', delay: '0.1s', color: 'bg-amber-300' },
  { left: '30%', delay: '0.2s', color: 'bg-fuchsia-300' },
  { left: '42%', delay: '0.05s', color: 'bg-lime-300' },
  { left: '55%', delay: '0.15s', color: 'bg-pink-200' },
  { left: '68%', delay: '0.08s', color: 'bg-amber-200' },
  { left: '78%', delay: '0.18s', color: 'bg-fuchsia-200' },
  { left: '88%', delay: '0.12s', color: 'bg-lime-200' },
];

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/35 flex items-center justify-center p-4 z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiDrops.map((drop, index) => (
          <span
            key={index}
            className={`confetti-piece ${drop.color}`}
            style={{ left: drop.left, animationDelay: drop.delay }}
          />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-pink-100 bg-white/95 px-8 py-8 text-center shadow-[0_32px_120px_-60px_rgba(236,72,153,0.6)]">
        <div className="mb-4 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-200 via-pink-100 to-amber-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-700 shadow-sm">
          Candy Win!
        </div>
        <div className="text-[3.5rem] leading-none tracking-tight">🍭🍬🎉</div>
        <h2 className="mt-4 text-3xl font-bold text-fuchsia-900">BINGO!</h2>
        <p className="mt-2 text-sm text-fuchsia-700/90">You completed a sweet candy line.</p>
        <button
          onClick={onDismiss}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-300/40 transition duration-200 hover:scale-[1.01] active:scale-95"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
