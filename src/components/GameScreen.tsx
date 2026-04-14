import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-full flex-col bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.12),transparent_24%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.14),transparent_20%),#fff1f7]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white/90 border-b border-pink-100/80 shadow-sm shadow-pink-100/80 backdrop-blur-sm">
        <button
          onClick={onReset}
          className="rounded-full border border-pink-200 bg-white/95 px-4 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm transition hover:bg-fuchsia-50 active:scale-95"
        >
          ← Back
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-500/90">Candy Pop Mixer</p>
          <h1 className="text-xl font-bold text-fuchsia-900">Bingo Mixer</h1>
        </div>

        <div className="w-16" />
      </header>

      {/* Instructions */}
      <div className="mx-auto w-full max-w-4xl px-4 py-4">
        <p className="mx-auto max-w-xl rounded-full border border-pink-200/80 bg-pink-50/90 px-4 py-3 text-center text-sm font-semibold text-fuchsia-800 shadow-sm shadow-pink-100/50">
          Tap a square when you find someone who matches it.
        </p>
      </div>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-4 mb-4 rounded-full bg-gradient-to-r from-fuchsia-100 via-amber-100 to-lime-100 px-4 py-3 text-center text-sm font-semibold text-fuchsia-900 shadow-[0_10px_30px_-18px_rgba(236,72,153,0.8)]">
          🎉 BINGO! You got a candy line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center px-4 pb-6">
        <div className="w-full max-w-3xl rounded-[40px] border border-pink-200/65 bg-white/90 p-4 shadow-[0_24px_90px_-60px_rgba(236,72,153,0.7)]">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
