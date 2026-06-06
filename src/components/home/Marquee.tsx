const items = [
  "Commercial lending",
  "Delivery & operations",
  "Product requirements",
  "Content at scale",
  "Document processing",
  "Risk & compliance",
  "Sprint boards",
  "Brand-safe production",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink/40 py-5">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-faint"
          >
            {item}
            <span className="text-citron/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
