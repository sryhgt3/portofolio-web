"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {
    // Particles loaded successfully
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0f172a", // Dark navy background
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
        },
      },
      particles: {
        color: {
          value: ["#4f7cff", "#8b5cf6"], // Biru modern & sedikit ungu
        },
        links: {
          color: "#4f7cff",
          distance: 150,
          enable: true,
          opacity: 0.2, // Opacity rendah sesuai permintaan
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8, // Kecepatan lambat
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 70, // Jumlah partikel sedang
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return <div className="fixed inset-0 z-[-1] bg-[#0f172a]" />;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
