/* Customer logo marquee, monochrome on obsidian, faded at the edges. */

type Customer = {
  name: string;
  src: string;
  /** Per-logo optical height tweak so the wordmarks read as one size. */
  className: string;
};

const customers: Customer[] = [
  { name: "Discuss.io", src: "/logos/discuss.svg", className: "h-7" },
  { name: "Voxco", src: "/logos/voxco.svg", className: "h-6" },
  { name: "Tripare", src: "/logos/tripare.png", className: "h-7" },
];

// Repeat the small set so a single marquee half overruns even ultrawide
// viewports, the track is rendered twice and slid -50% for a seamless loop.
const half = Array.from({ length: 5 }).flatMap(() => customers);
const track = [...half, ...half];

export function Customers() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto mb-9 flex w-full max-w-7xl justify-center px-5">
        <p className="eyebrow">Trusted by growth-focused enterprises</p>
      </div>

      <div className="group relative flex overflow-hidden border-y border-line bg-ink/40 py-7">
        {/* Edge fades into the page background. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-obsidian to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-obsidian to-transparent sm:w-40" />

        <div className="flex animate-marquee items-center whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <span
              key={i}
              className="mx-10 flex items-center sm:mx-14"
              aria-hidden={i >= half.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.name}
                draggable={false}
                className={`${c.className} w-auto max-w-none shrink-0 opacity-60 brightness-0 invert transition-all duration-500 ease-[var(--ease-out-expo)] hover:opacity-100`}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
