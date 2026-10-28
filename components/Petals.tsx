"use client";
import { useEffect, useRef } from "react";

type Petal = { x: number; y: number; r: number; vy: number; vx: number; a: number; va: number };

export default function Petals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, raf = 0;
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const make = (): Petal => ({
      x: Math.random() * w, y: Math.random() * -h, r: 4 + Math.random() * 6,
      vy: 0.5 + Math.random() * 1.2, vx: -0.3 + Math.random() * 0.8,
      a: Math.random() * Math.PI * 2, va: (Math.random() - 0.5) * 0.04,
    });
    const petals = Array.from({ length: 60 }, make);
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of petals) {
        p.y += p.vy; p.x += p.vx + Math.sin(p.y / 40) * 0.4; p.a += p.va;
        if (p.y > h + 20) Object.assign(p, make(), { y: -20 });
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.a);
        ctx.fillStyle = "rgba(255,150,185,0.7)";
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="petals" aria-hidden />;
}
