"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

// Three.js canvas — infinity symbol (lemniscate of Bernoulli) particle field
const WovenCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const clock = new THREE.Clock();
    const mouse = new THREE.Vector2(0, 0);

    // --- Build infinity (lemniscate of Bernoulli) particle field ---
    const particleCount = 22000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const a = 2.2; // curve scale
    const spread = 0.12; // particle spread around the curve
    const blueColor = new THREE.Color("#818cf8");
    const midColor = new THREE.Color("#c084fc");
    const pinkColor = new THREE.Color("#f472b6");

    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 2;

      // Lemniscate of Bernoulli: x = a√2·cos(t)/(sin²t+1), y = a√2·cos(t)·sin(t)/(sin²t+1)
      const denom = 1 + Math.sin(t) * Math.sin(t);
      const bx = (a * Math.SQRT2 * Math.cos(t)) / denom;
      const by = (a * Math.SQRT2 * Math.cos(t) * Math.sin(t)) / denom;

      const x = bx + (Math.random() - 0.5) * spread;
      const y = by + (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread * 2.5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      velocities[i * 3] = velocities[i * 3 + 1] = velocities[i * 3 + 2] = 0;

      // Blue → purple → pink gradient along the curve
      const blend = (Math.sin(t) + 1) / 2;
      const c =
        blend < 0.5
          ? blueColor.clone().lerp(midColor, blend * 2)
          : midColor.clone().lerp(pinkColor, (blend - 0.5) * 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Reuse vectors each frame to avoid GC pressure
    const vTemp = new THREE.Vector3();
    const cur = new THREE.Vector3();
    const orig = new THREE.Vector3();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const mwx = mouse.x * 3;
      const mwy = mouse.y * 3;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3,
          iy = i * 3 + 1,
          iz = i * 3 + 2;

        cur.set(positions[ix], positions[iy], positions[iz]);
        orig.set(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
        vTemp.set(velocities[ix], velocities[iy], velocities[iz]);

        // Mouse repulsion
        const dx = cur.x - mwx;
        const dy = cur.y - mwy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1.4) {
          const force = ((1.4 - dist) * 0.014) / dist;
          vTemp.x += dx * force;
          vTemp.y += dy * force;
        }

        // Spring back to original
        vTemp.x += (orig.x - cur.x) * 0.002;
        vTemp.y += (orig.y - cur.y) * 0.002;
        vTemp.z += (orig.z - cur.z) * 0.002;

        // Damping
        vTemp.multiplyScalar(0.95);

        positions[ix] += vTemp.x;
        positions[iy] += vTemp.y;
        positions[iz] += vTemp.z;
        velocities[ix] = vTemp.x;
        velocities[iy] = vTemp.y;
        velocities[iz] = vTemp.z;
      }

      geometry.attributes.position.needsUpdate = true;
      // Slow rotation to show 3-D depth
      points.rotation.y = elapsed * 0.07;
      points.rotation.x = Math.sin(elapsed * 0.04) * 0.12;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

// Main hero — drop-in replacement for the home-v2 hero section
export const WovenLightHero = () => {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden flex items-center justify-center"
      style={{ background: "#07080f" }}
    >
      {/* Three.js ∞ particle field */}
      <WovenCanvas />

      {/* Pragmatiq logo — ghosted softly behind the particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
      >
        <img
          src="/pragicon.png"
          alt=""
          className="w-[42%] max-w-[480px] select-none"
          style={{
            opacity: 0.09,
            mixBlendMode: "screen",
            filter: "brightness(3) saturate(0.4)",
          }}
        />
      </div>

      {/* Bottom fade into page body */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }}
      />

      {/* Bottom hairline separator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.06) 65%, transparent 95%)",
        }}
      />

      {/* ── Content — centered ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Enterprise label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-3"
        >
          <span
            className="h-px w-8"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35))",
            }}
          />
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Enterprise Technology
          </span>
          <span
            className="h-px w-8"
            style={{
              background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.35))",
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-6 font-bold leading-[1.07] tracking-[-0.025em] text-white text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]"
        >
          Agile. Adaptive.
          <br />
          <span
            style={{
              background:
                "linear-gradient(100deg, #818cf8 0%, #a78bfa 25%, #c084fc 50%, #e879f9 75%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Accountability.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mb-10 max-w-[480px] text-[1.05rem] leading-[1.75]"
          style={{ color: "rgba(255,255,255,0.48)" }}
        >
          Harnessing pragmatic innovation and leading technologies to build
          scalable digital solutions with agility, adaptability, and
          accountability at their core.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-5"
        >
          <Link
            href="/contact/"
            target="_self"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Explore Solutions
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href="/contact/"
            target="_self"
            className="text-sm font-medium transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
