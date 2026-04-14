import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center px-3 py-4 text-center border rounded-[28px] transition-all duration-200 select-none min-h-[72px] text-[0.85rem] leading-tight shadow-sm';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-fuchsia-100 via-amber-100 to-lime-100 border-amber-300 text-fuchsia-900 shadow-[0_12px_24px_-12px_rgba(251,191,24,0.8)]'
      : 'bg-[#fde8f2] border-fuchsia-200 text-fuchsia-900 shadow-[0_16px_30px_-16px_rgba(236,72,153,0.35)]'
    : 'bg-white/95 border-pink-100 text-fuchsia-900 hover:bg-pink-50 active:scale-[0.97]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-gradient-to-br from-fuchsia-200 via-pink-100 to-rose-100 border-pink-200 text-fuchsia-900 font-bold shadow-[inset_0_0_0_2px_rgba(236,72,153,0.12)]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-2 right-2 text-lg">🍬</span>
      )}
      {square.isFreeSpace && (
        <span className="absolute inset-x-0 bottom-2 text-[0.68rem] uppercase tracking-[0.24em] text-fuchsia-700">
          free sweet
        </span>
      )}
    </button>
  );
}
