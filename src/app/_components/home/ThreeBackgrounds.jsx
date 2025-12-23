'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Line } from '@react-three/drei';
import { useMemo, useRef } from 'react';

export default function ThreeBackgrounds({ scene }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
      style={{ pointerEvents: 'none' }}
    >
      {/* lights */}
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-2, -2, -1]} intensity={0.25} color="#ffffff" />

      {scene === 'tech' && <TechScene />}
      {scene === 'clients' && <ClientsScene />}
      {scene === 'ai' && <AIScene />}
      {scene === 'saas' && <SaaSScene />}
    </Canvas>
  );
}

/* ============ Tech: floating cubes ============ */
function TechScene() {
  const group = useRef();

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.12;
  });

  const palette = ['#93c5fd', '#a7f3d0', '#fde68a', '#c7d2fe', '#fecaca'];
  const cubes = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        key: i,
        size: 0.18 + Math.random() * 0.28,
        color: palette[i % palette.length],
        position: [
          (Math.random() - 0.5) * 3.2,
          (Math.random() - 0.5) * 2.2,
          (Math.random() - 0.5) * 2.0,
        ],
        speed: 0.7 + Math.random() * 0.8,
        rot: 0.5 + Math.random() * 1.2,
      })),
    []
  );

  return (
    <group ref={group}>
      {cubes.map((c) => (
        <Float key={c.key} speed={c.speed} rotationIntensity={c.rot} floatIntensity={0.8}>
          <mesh position={c.position}>
            <boxGeometry args={[c.size, c.size, c.size]} />
            <meshStandardMaterial color={c.color} roughness={0.35} metalness={0.15} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ============ Clients: floating avatar spheres ============ */
function ClientsScene() {
  const group = useRef();

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y -= dt * 0.08;
  });

  const palette = ['#a7f3d0', '#bfdbfe', '#fde68a', '#c7d2fe', '#fecaca', '#e9d5ff'];
  const spheres = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        key: i,
        r: 0.25 + Math.random() * 0.35,
        color: palette[i % palette.length],
        position: [
          (Math.random() - 0.5) * 3.0,
          (Math.random() - 0.5) * 1.8,
          (Math.random() - 0.5) * 1.6,
        ],
        speed: 0.6 + Math.random() * 0.8,
      })),
    []
  );

  return (
    <group ref={group}>
      {spheres.map((s) => (
        <Float key={s.key} speed={s.speed} rotationIntensity={0.4} floatIntensity={0.7}>
          <mesh position={s.position}>
            <icosahedronGeometry args={[s.r, 1]} />
            <meshStandardMaterial color={s.color} roughness={0.4} metalness={0.1} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ============ AI: neural nodes + lines ============ */
function AIScene() {
  const group = useRef();

  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.1;
    group.current.rotation.x = Math.sin(performance.now() / 2000) * 0.08;
  });

  const { points, edges } = useMemo(() => {
    const N = 55;
    const radius = 1.9;
    const pts = [];
    for (let i = 0; i < N; i++) {
      pts.push(randomInSphere(radius));
    }
    // Connect each node to its 2 nearest neighbors
    const edgePairs = [];
    for (let i = 0; i < N; i++) {
      const dists = pts
        .map((p, j) => ({ j, d: i === j ? Infinity : pts[i].distanceTo(p) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      dists.forEach(({ j }) => edgePairs.push([pts[i], pts[j]]));
    }
    return { points: pts, edges: edgePairs };
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  return (
    <group ref={group}>
      {/* Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#60a5fa"
          size={0.05}
          sizeAttenuation
          opacity={0.95}
          transparent
        />
      </points>
      {/* Connections */}
      {edges.map((pair, i) => (
        <Line
          key={i}
          points={pair}
          color="#93c5fd"
          lineWidth={1}
          transparent
          opacity={0.7}
        />
      ))}
      {/* subtle glow core */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#93c5fd" emissive="#c7d2fe" emissiveIntensity={0.4} roughness={1} />
      </mesh>
    </group>
  );
}

/* ============ SaaS: dashboard cards + clouds ============ */
function SaaSScene() {
  const group = useRef();

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y -= dt * 0.06;
  });

  return (
    <group ref={group}>
      {/* Cloudy soft spheres */}
      <mesh position={[-1.2, 0.7, -0.3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#93c5fd" opacity={0.12} transparent roughness={1} />
      </mesh>
      <mesh position={[1.1, -0.4, -0.6]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#a7f3d0" opacity={0.12} transparent roughness={1} />
      </mesh>

      {/* Floating rounded boxes like dashboards/cards */}
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.7}>
        <RoundedBox position={[-1.2, 0.8, 0.3]} args={[1.8, 1.1, 0.2]} radius={0.08} smoothness={6}>
          <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
        </RoundedBox>
      </Float>
      <Float speed={1.0} rotationIntensity={0.35} floatIntensity={0.8}>
        <RoundedBox position={[1.0, 0.2, -0.1]} args={[1.6, 1.0, 0.2]} radius={0.08} smoothness={6}>
          <meshStandardMaterial color="#F8FAFC" roughness={0.35} metalness={0.06} />
        </RoundedBox>
      </Float>
      <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.7}>
        <RoundedBox position={[-0.6, -0.8, 0.5]} args={[1.4, 0.9, 0.2]} radius={0.08} smoothness={6}>
          <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
        </RoundedBox>
      </Float>
    </group>
  );
}

/* utils */
function randomInSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random());
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  );
}