import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

type Particle = {
  phase: number;
  speed: number;
  band: number;
  wobble: number;
  size: number;
  alpha: number;
};

const TAU = Math.PI * 2;

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => ({
    phase: (index / count) * TAU + Math.random() * 0.18,
    speed: 0.000055 + Math.random() * 0.00008,
    band: (Math.random() - 0.5) * (24 + Math.random() * 70),
    wobble: Math.random() * TAU,
    size: 0.45 + Math.random() * 1.35,
    alpha: 0.16 + Math.random() * 0.56,
  }));
}

export function ParticleField({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particleCount = window.innerWidth < 720 ? 280 : 620;
    const particles = makeParticles(particleCount);
    const pointer = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let start = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const draw = (now: number) => {
      const elapsed = reducedMotion.matches ? 0 : now - start;
      const direction = theme === "dark" ? -1 : 1;
      const mirrored = theme === "dark" ? -1 : 1;
      const centerX = width * 0.52;
      const centerY = Math.min(height * 0.48, 480);
      const fieldWidth = Math.min(width * 0.39, 610);
      const fieldHeight = Math.min(height * 0.3, 235);

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = theme === "dark" ? "screen" : "source-over";

      for (const particle of particles) {
        const t = particle.phase + elapsed * particle.speed * direction;
        const sin = Math.sin(t);
        const cos = Math.cos(t);
        const denominator = 1 + sin * sin;
        const baseX = (fieldWidth * cos) / denominator;
        const baseY = (fieldHeight * sin * cos) / denominator;
        const normalX = -Math.cos(t * 2);
        const normalY = Math.sin(t * 2);
        const drift = Math.sin(elapsed * 0.00042 + particle.wobble) * 5;
        let x = centerX + mirrored * (baseX + normalX * (particle.band + drift));
        let y = centerY + baseY + normalY * particle.band * 0.38;

        if (pointer.active) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < 15000 && distanceSquared > 1) {
            const force = (1 - distanceSquared / 15000) * 28;
            const distance = Math.sqrt(distanceSquared);
            x += (dx / distance) * force;
            y += (dy / distance) * force;
          }
        }

        const fadeFromCenter = Math.max(0.18, 1 - Math.abs(y - centerY) / (height * 0.72));
        const color =
          theme === "dark"
            ? `rgba(190, 205, 213, ${particle.alpha * fadeFromCenter})`
            : `rgba(7, 15, 20, ${particle.alpha * fadeFromCenter})`;

        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, particle.size, 0, TAU);
        context.fill();
      }

      context.globalCompositeOperation = "source-over";
      if (!reducedMotion.matches) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      start = 0;
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
