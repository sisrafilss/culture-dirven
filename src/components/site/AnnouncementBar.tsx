export function AnnouncementBar() {
  const items = [
    "FREE SHIPPING ON ORDERS OVER $75",
    "NEW DROP — WORLD CUP CAPSULE",
    "STUDENT DISCOUNT 15% — VERIFY AT CHECKOUT",
    "LIMITED EDITION — GRADUATION '26",
    "REP THE CULTURE",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-foreground text-background py-2 overflow-hidden border-b border-foreground/10">
      <div className="marquee marquee-fast">
        <div className="marquee-track">
          {row.map((t, i) => (
            <span key={i} className="font-display tracking-[0.2em] text-xs whitespace-nowrap inline-flex items-center gap-3">
              {t} <span className="text-sauce-red">●</span>
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {row.map((t, i) => (
            <span key={i} className="font-display tracking-[0.2em] text-xs whitespace-nowrap inline-flex items-center gap-3">
              {t} <span className="text-sauce-red">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
