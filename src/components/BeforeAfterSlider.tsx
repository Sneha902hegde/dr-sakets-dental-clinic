import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeMidline: number;
  afterMidline: number;
  afterZoom?: number;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeMidline,
  afterMidline,
  afterZoom,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(0);

  const zoom = Math.max(
    1,
    ...[beforeMidline, afterMidline].flatMap((m) => [0.5 / m, 0.5 / (1 - m)]),
  );

  const layerStyle = (midline: number, scale = zoom) => ({
    width: `${scale * 100}%`,
    left: `${(0.5 - midline * scale) * 100}%`,
  });

  const setFromClientX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) setFromClientX(e.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
    else if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative h-64 w-full cursor-ew-resize touch-pan-y select-none overflow-hidden"
    >
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute top-0 h-full max-w-none object-cover"
        style={layerStyle(beforeMidline)}
      />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={after}
          alt={afterAlt}
          draggable={false}
          loading="lazy"
          className="pointer-events-none absolute top-0 h-full max-w-none object-cover"
          style={layerStyle(afterMidline, afterZoom)}
        />
      </div>

      {pos < 100 && (
        <span className="absolute right-3 top-3 rounded-full bg-ink-900/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          Before
        </span>
      )}
      {pos > 0 && (
        <span className="absolute left-3 top-3 rounded-full bg-accent-400 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          After
        </span>
      )}

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after photos"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-700 shadow-lg ring-2 ring-white/60 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-accent-400"
        style={{ left: `${pos}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" />
      </div>
    </div>
  );
}
