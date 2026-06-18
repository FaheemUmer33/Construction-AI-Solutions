"use client";

import { Float, Line, OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import type { Group } from "three";

const nodes = [
  { label: "Plan", position: [-3.2, 0.8, 0], color: "#dff3e9" },
  { label: "Site", position: [-1.1, -0.55, 0.35], color: "#739b87" },
  { label: "AI", position: [1.2, 0.65, -0.15], color: "#a5c7b7" },
  { label: "Handover", position: [3.25, -0.35, 0], color: "#dff3e9" }
] as const;

function WorkflowScene({ optimized }: { optimized: boolean }) {
  const group = useRef<Group>(null);
  const linePoints = useMemo(() => nodes.map((node) => node.position), []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.12;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.35, 7]} fov={42} />
      <ambientLight intensity={1.1} />
      <pointLight position={[1.5, 3, 4]} intensity={optimized ? 2.2 : 1.4} color={optimized ? "#a5c7b7" : "#dff3e9"} />
      <group ref={group}>
        <Line points={linePoints} color={optimized ? "#a5c7b7" : "#dff3e9"} lineWidth={3} transparent opacity={0.72} />
        {nodes.map((node, index) => (
          <Float key={node.label} speed={1.2 + index * 0.15} rotationIntensity={0.28} floatIntensity={0.34}>
            <group position={node.position}>
              <Sphere args={[optimized && node.label === "AI" ? 0.28 : 0.22, 32, 32]}>
                <meshStandardMaterial
                  color={optimized && node.label === "AI" ? "#a5c7b7" : node.color}
                  emissive={optimized && node.label === "AI" ? "#43735c" : "#02331e"}
                  emissiveIntensity={optimized && node.label === "AI" ? 0.55 : 0.16}
                  roughness={0.28}
                  metalness={0.35}
                />
              </Sphere>
              <mesh position={[0, -0.52, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.32, 0.34, 48]} />
                <meshBasicMaterial color={optimized ? "#a5c7b7" : "#dff3e9"} transparent opacity={0.28} />
              </mesh>
            </group>
          </Float>
        ))}
        {Array.from({ length: 18 }).map((_, index) => (
          <mesh key={index} position={[-3.8 + index * 0.45, -1.55, -0.9]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.18, 0.018]} />
            <meshBasicMaterial color="#dff3e9" transparent opacity={0.18} />
          </mesh>
        ))}
      </group>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </>
  );
}

export function Workflow3D() {
  const [optimized, setOptimized] = useState(true);
  const reduced = useReducedMotion();
  const comparison = [
    {
      title: "Current manual workflow",
      tone: "Baseline",
      items: ["Site updates collected by calls and messages", "Reports assembled after the workday", "Risks discovered after delays appear"],
      metrics: ["Manual logs", "Reactive decisions", "Delayed visibility"]
    },
    {
      title: "AI-powered workflow",
      tone: "Optimized",
      items: ["Field signals converted into live project intelligence", "Dashboards update schedule, cost, and quality status", "Risks flagged before they become expensive"],
      metrics: ["31% less reporting time", "18% lower rework exposure", "42% faster visibility"]
    }
  ];
  const metrics = optimized
    ? [
        ["Schedule visibility", "+42%"],
        ["Field reporting time", "-31%"],
        ["Rework exposure", "-18%"]
      ]
    : [
        ["Schedule visibility", "Baseline"],
        ["Field reporting time", "Manual"],
        ["Rework exposure", "Reactive"]
      ];

  return (
    <motion.div
      className="industrial-card overflow-hidden rounded-lg"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-safety">Interactive Workflow</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-[0.01em] text-white">Current process vs AI-optimized delivery</h3>
        </div>
        <div className="grid grid-cols-2 rounded-md border border-white/10 bg-white/5 p-1 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setOptimized(false)}
            className={`rounded px-4 py-2 transition ${!optimized ? "bg-white text-steel" : "text-slate-300 hover:text-white"}`}
          >
            Current
          </button>
          <button
            type="button"
            onClick={() => setOptimized(true)}
            className={`rounded px-4 py-2 transition ${optimized ? "bg-ember text-steel" : "text-slate-300 hover:text-white"}`}
          >
            AI Optimized
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[330px] border-b border-white/10 bg-cas-forest lg:border-b-0 lg:border-r">
          <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }} gl={{ antialias: true, alpha: true }}>
            <WorkflowScene optimized={optimized} />
          </Canvas>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent,rgba(2,51,30,0.36))]" />
        </div>
        <div className="grid content-center gap-4 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Construction AI Solutions connects planning, site observations, dashboards, and client communication into one construction intelligence loop.
          </p>
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-md border border-white/10 bg-white/[0.045] p-4">
              <div className="font-display text-2xl font-semibold tracking-[0.01em] text-white">{value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 border-t border-white/10 p-5 md:grid-cols-2">
        {comparison.map((column, index) => (
          <article
            key={column.title}
            className={`rounded-lg border p-5 ${
              index === 1
                ? "border-cas-mint/40 bg-cas-primary/60 shadow-[0_0_40px_rgba(165,199,183,0.12)]"
                : "border-white/10 bg-cas-forest/60"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-display text-lg font-medium text-white">{column.title}</h4>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${index === 1 ? "bg-cas-light text-cas-forest" : "bg-white/10 text-cas-mint"}`}>
                {column.tone}
              </span>
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-cas-light/82">
              {column.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${index === 1 ? "bg-cas-mint" : "bg-cas-sage"}`} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {column.metrics.map((metric) => (
                <div key={metric} className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-white">
                  {metric}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
