"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Pulled from the site's blue theme tokens (see globals.css):
//   --color-primary   #5e90f6   --color-secondary #c0d5ff   --color-spark #ff8a4c
const PRIMARY = "#5e90f6"; // core / key light
const SECONDARY = "#c0d5ff"; // wireframe, dust, fill light
const SPARK = "#ff8a4c"; // single warm accent node

/* The glowing, breathing core. */
function Core() {
  const inner = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (inner.current) inner.current.rotation.y = t * 0.18;
    if (wire.current) {
      wire.current.rotation.y = -t * 0.12;
      wire.current.rotation.x = t * 0.06;
    }
  });

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron ref={inner} args={[1, 4]}>
          <MeshDistortMaterial
            color={PRIMARY}
            emissive={PRIMARY}
            emissiveIntensity={0.55}
            roughness={0.25}
            metalness={0.7}
            distort={0.32}
            speed={1.6}
          />
        </Icosahedron>
        <Icosahedron ref={wire} args={[1.45, 1]}>
          <meshBasicMaterial
            color={SECONDARY}
            wireframe
            transparent
            opacity={0.18}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

/* Orbiting agent nodes. */
function OrbitNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () => [
      { r: 2.4, speed: 0.5, color: PRIMARY, y: 0.2, phase: 0 },
      { r: 2.9, speed: -0.35, color: SECONDARY, y: -0.4, phase: 2 },
      { r: 2.2, speed: 0.42, color: SPARK, y: 0.6, phase: 4 },
      { r: 3.1, speed: -0.28, color: SECONDARY, y: -0.1, phase: 1 },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current?.children.forEach((child, i) => {
      const n = nodes[i];
      child.position.set(
        Math.cos(t * n.speed + n.phase) * n.r,
        n.y + Math.sin(t * n.speed * 1.4 + n.phase) * 0.3,
        Math.sin(t * n.speed + n.phase) * n.r
      );
    });
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color={n.color} />
        </mesh>
      ))}
    </group>
  );
}

/* Deterministic pseudo-random in [0,1), keeps the dust stable across
   renders and satisfies the react-hooks/purity rule (no Math.random()). */
function hashRand(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* Surrounding particle dust. */
function Dust({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.2 + hashRand(i * 3) * 4.5;
      const theta = hashRand(i * 3 + 1) * Math.PI * 2;
      const phi = Math.acos(2 * hashRand(i * 3 + 2) - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color={SECONDARY}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* Pointer parallax for the whole rig. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y +=
      (pointer.x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x +=
      (-pointer.y * 0.25 - group.current.rotation.x) * 0.04;
  });
  return <group ref={group}>{children}</group>;
}

function AgentScene() {
  const { viewport } = useThree();
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsLarge(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsLarge(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Position the globe on the right for large screens (lg), centered for others
  const xOffset = isLarge ? viewport.width * 0.18 : 0;

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={40} color={PRIMARY} />
      <pointLight position={[-6, -3, -4]} intensity={30} color={SECONDARY} />
      <Rig>
        <group position={[xOffset, 0, 0]}>
          <Core />
          <OrbitNodes />
        </group>
        <Dust count={500} />
      </Rig>
    </>
  );
}

export default function AgentCore({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      // Pause the render loop entirely when the orb is off-screen or the tab
      // is hidden, no GPU work when nobody's looking at it.
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      // antialias off on the canvas: the EffectComposer renders to its own
      // buffer, so canvas-level MSAA is wasted work here.
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <AgentScene />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.5}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
