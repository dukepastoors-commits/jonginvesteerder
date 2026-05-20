export default function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="inline-flex items-center gap-0.5 text-ji-teal" aria-label={`${rating} van 5`}>
      {Array.from({ length: full }).map((_, i) => <span key={`f${i}`}>★</span>)}
      {half && <span>☆</span>}
      {Array.from({ length: empty }).map((_, i) => <span key={`e${i}`} className="text-slate-300">★</span>)}
      <span className="ml-1 text-xs text-slate-500">{rating.toFixed(1)}</span>
    </span>
  );
}
