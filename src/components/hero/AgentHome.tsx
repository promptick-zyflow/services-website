"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   "Home of the AI workforce", isometric pixel-art hero scene stitched
   from the agent_inventor_workshop sprite set, laid out to match the
   reference shot. The room is a 212×228 native-pixel coordinate space
   scaled responsively. Sterling (our agent persona) walks to whichever
   furniture hotspot is hovered or clicked; hotspots pulse softly so
   they're discoverable, and brighten with a solid border on hover.
   The whole scene is tone-mapped into the site's dark palette.
------------------------------------------------------------------ */

const ROOM = { w: 212, h: 228 };
const A = "/agent-hero";

type Layer = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  frames?: number;
  frame?: number;
  flip?: boolean; // mirror horizontally
  /** Hotspot key that lights this layer in its true colours on hover. */
  spot?: string;
};

/* Placements derived from the reference image (room-native pixels). */
const layers: Layer[] = [
  { src: `${A}/room-alt.png`, x: 0, y: 0, w: 212, h: 228, z: 0 },
  // rug centred in the room
  { src: `${A}/rug.png`, x: 44, y: 134, w: 88, h: 45, z: 20 },
  // plant on the right-front floor, by the wall corner
  { src: `${A}/floor-plant.png`, x: 168, y: 130, w: 26, h: 34, z: 60, spot: "plant" },
  // sofa pushed back so it stays off the rug
  { src: `${A}/sofa.png`, x: 68, y: 88, w: 50, h: 50, z: 40, frames: 5, frame: 0, spot: "sofa" },
  // stool beside the sofa, off the rug
  { src: `${A}/stool.png`, x: 54, y: 124, w: 16, h: 16, z: 56, spot: "sofa" },
  // coffee table on the rug, in front of the couch
  { src: `${A}/coffee-table.png`, x: 78, y: 146, w: 40, h: 29, z: 58, frames: 2, frame: 0 },
  // the blue book stack on the coffee table
  { src: `${A}/coffee.png`, x: 88, y: 152, w: 16, h: 16, z: 59, frames: 6, frame: 0 },
  // shelf pulled forward off the wall
  { src: `${A}/bookshelf.png`, x: 148, y: 116, w: 40, h: 52, z: 44, frames: 2, frame: 0, spot: "bookshelf" },
  // workstation table at the front of the room, centred
  { src: `${A}/desk.png`, x: 80, y: 172, w: 49, h: 37, z: 200, spot: "desk" },
  { src: `${A}/computer.png`, x: 94, y: 165, w: 32, h: 32, z: 202, frames: 5, frame: 0, spot: "desk" },
  // cable from the printer over to the laptop
  { src: `${A}/agent-printer-wire.png`, x: 44, y: 162, w: 54, h: 29, z: 168 },
];

/* The 3D printer, left-front floor, printing on a loop. */
const PRINTER = { x: 30, y: 138, w: 38, h: 47, z: 182, frames: 16 };

type Spot = {
  key: string;
  label: string;
  hit: { x: number; y: number; w: number; h: number };
  feet: { x: number; y: number };
};

const spots: Spot[] = [
  { key: "sofa", label: "Sofa", hit: { x: 68, y: 92, w: 50, h: 42 }, feet: { x: 96, y: 148 } },
  { key: "bookshelf", label: "Bookshelf", hit: { x: 148, y: 116, w: 40, h: 38 }, feet: { x: 150, y: 180 } },
  { key: "desk", label: "Desk", hit: { x: 80, y: 166, w: 50, h: 44 }, feet: { x: 134, y: 196 } },
  { key: "plant", label: "Plant", hit: { x: 166, y: 128, w: 28, h: 38 }, feet: { x: 168, y: 178 } },
  { key: "printer", label: "3D printer", hit: { x: 30, y: 138, w: 38, h: 47 }, feet: { x: 70, y: 192 } },
];

const pctX = (n: number) => `${(n / ROOM.w) * 100}%`;
const pctY = (n: number) => `${(n / ROOM.h) * 100}%`;

/* The scene's resting tone, hovered objects light up to their true colours. */
const DIM = "brightness(0.78) saturate(0.82) hue-rotate(-8deg)";
const LIT = "brightness(1.05) saturate(1.05)";

function Sprite({ l, lit }: { l: Layer; lit?: boolean }) {
  const frames = l.frames ?? 1;
  return (
    <div
      className="absolute"
      style={{
        left: pctX(l.x),
        top: pctY(l.y),
        width: pctX(l.w),
        height: pctY(l.h),
        zIndex: l.z,
        filter: lit ? LIT : DIM,
        transition: "filter 0.35s ease",
        transform: l.flip ? "scaleX(-1)" : undefined,
        backgroundImage: `url(${l.src})`,
        backgroundSize: `${frames * 100}% 100%`,
        backgroundPositionX:
          frames > 1 ? `${((l.frame ?? 0) / (frames - 1)) * 100}%` : "0",
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
      aria-hidden
    />
  );
}

/* Sterling's footprint in room pixels (bust portrait, feet at bottom). */
const AGENT = { w: 20, h: 27 };
const WALK_MS_PER_PX = 26;

export function AgentHome() {
  const [feet, setFeet] = useState({ x: 108, y: 168 });
  const [walking, setWalking] = useState(false);
  const [faceLeft, setFaceLeft] = useState(false);
  const [hoverSpot, setHoverSpot] = useState<Spot | null>(null);
  const [duration, setDuration] = useState(0);
  const [printFrame, setPrintFrame] = useState(0);
  const walkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The 3D printer keeps printing its box, frame by frame, on a loop.
  useEffect(() => {
    const t = setInterval(
      () => setPrintFrame((f) => (f + 1) % PRINTER.frames),
      450
    );
    return () => clearInterval(t);
  }, []);

  const walkTo = (spot: Spot) => {
    setFeet((cur) => {
      const dx = spot.feet.x - cur.x;
      const dy = spot.feet.y - cur.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 2) return cur;
      if (Math.abs(dx) > 1) setFaceLeft(dx < 0);
      const ms = Math.max(350, dist * WALK_MS_PER_PX);
      setDuration(ms);
      setWalking(true);
      if (walkTimer.current) clearTimeout(walkTimer.current);
      walkTimer.current = setTimeout(() => setWalking(false), ms);
      return { ...spot.feet };
    });
  };

  useEffect(
    () => () => {
      if (walkTimer.current) clearTimeout(walkTimer.current);
    },
    []
  );

  return (
    <div
      className="relative mx-auto w-full select-none"
      style={{ maxWidth: "34rem", aspectRatio: `${ROOM.w} / ${ROOM.h}` }}
    >
      {/* Scene, each layer carries the dark tone; the hovered object
          lights up in its true colours */}
      <div className="absolute inset-0">
        {layers.map((l) => (
          <Sprite
            key={l.src + l.x}
            l={l}
            lit={!!l.spot && hoverSpot?.key === l.spot}
          />
        ))}

        {/* the 3D printer, front of the right wall, printing on loop */}
        <Sprite
          l={{
            src: `${A}/agent-printer.png`,
            x: PRINTER.x,
            y: PRINTER.y,
            w: PRINTER.w,
            h: PRINTER.h,
            z: PRINTER.z,
            frames: PRINTER.frames,
            frame: printFrame,
            spot: "printer",
          }}
          lit={hoverSpot?.key === "printer"}
        />

        {/* Selection marker at the hovered spot's walk target */}
        {hoverSpot && (
          <div
            className="absolute"
            style={{
              left: pctX(hoverSpot.feet.x - 8),
              top: pctY(hoverSpot.feet.y - 4),
              width: pctX(16),
              height: pctY(16),
              zIndex: 15,
              backgroundImage: `url(${A}/selection.png)`,
              backgroundSize: "300% 100%",
              backgroundPositionX: "0%",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
            }}
            aria-hidden
          />
        )}

        {/* Sterling, our agent persona, walking between spots */}
        <div
          className="absolute"
          style={{
            left: pctX(feet.x - AGENT.w / 2),
            top: pctY(feet.y - AGENT.h + 1),
            width: pctX(AGENT.w),
            height: pctY(AGENT.h),
            zIndex: Math.round(feet.y),
            transitionProperty: "left, top",
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "linear",
          }}
          aria-hidden
        >
          <div className={walking ? "agent-bob h-full w-full" : "h-full w-full"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agents/sterling.svg"
              alt=""
              draggable={false}
              className="h-full w-full select-none"
              style={{
                imageRendering: "pixelated",
                transform: faceLeft ? "scaleX(-1)" : "none",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.45))",
              }}
            />
          </div>
        </div>

        {/* Light rays overlay */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: 0,
            top: 0,
            width: pctX(210),
            height: pctY(226),
            zIndex: 300,
            backgroundImage: `url(${A}/lightrays.png)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",
            opacity: 0.4,
            mixBlendMode: "screen",
          }}
          aria-hidden
        />

      </div>

      {/* Hotspots, invisible; the object itself lights up on hover */}
      {spots.map((s) => (
        <button
          key={s.key}
          type="button"
          aria-label={`Send the agent to the ${s.label}`}
          onMouseEnter={() => {
            setHoverSpot(s);
            walkTo(s);
          }}
          onMouseLeave={() => setHoverSpot(null)}
          onClick={() => walkTo(s)}
          className="absolute cursor-pointer"
          style={{
            left: pctX(s.hit.x),
            top: pctY(s.hit.y),
            width: pctX(s.hit.w),
            height: pctY(s.hit.h),
            zIndex: 400,
            background: "transparent",
            border: "none",
          }}
        />
      ))}
    </div>
  );
}
