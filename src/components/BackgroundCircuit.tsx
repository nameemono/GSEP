import { useEffect, useRef } from "react";

interface BackgroundCircuitProps {
  isDark: boolean;
}

export default function BackgroundCircuit({ isDark }: BackgroundCircuitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track state on resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Silicon trace lines (circuit traces)
    interface Trace {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      width: number;
      color: string;
    }

    const traces: Trace[] = [];
    const maxTraces = 25;

    // Helper to generate a random path following standard 45/90 degree routing (Semiconductor layout style)
    const generateTracePath = (): { x: number; y: number }[] => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const points = [{ x: startX, y: startY }];

      let currentX = startX;
      let currentY = startY;
      const segmentCount = 3 + Math.floor(Math.random() * 4);
      const segmentLength = 40 + Math.random() * 80;

      for (let i = 0; i < segmentCount; i++) {
        // Choose semiconductor routing direction: 0, 45, 90, 135, 180, 225, 270, 315 deg
        const angleIdx = Math.floor(Math.random() * 8);
        const angle = (angleIdx * Math.PI) / 4;

        currentX += Math.cos(angle) * segmentLength;
        currentY += Math.sin(angle) * segmentLength;

        // Keep inside bounds roughly
        if (currentX < 0 || currentX > width || currentY < 0 || currentY > height) {
          break;
        }

        points.push({ x: currentX, y: currentY });
      }

      return points;
    };

    // Init traces
    const createNewTrace = (): Trace => {
      const colorPalette = [
        "rgba(212, 175, 55, 0.45)",  // Rolex Gold
        "rgba(244, 197, 66, 0.35)",  // Premium Gold Glow
        "rgba(193, 18, 31, 0.35)",   // Highlight Red
        "rgba(139, 0, 0, 0.25)"      // Deep Red Accent
      ];

      return {
        points: generateTracePath(),
        progress: 0,
        speed: 0.003 + Math.random() * 0.009, // Luxurious slower deliberate flows
        width: 1 + Math.random() * 1.5,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
      };
    };

    for (let i = 0; i < maxTraces; i++) {
      traces.push(createNewTrace());
    }

    // Dynamic grid drawing config
    const gripSpacing = 80;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.04)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < width; x += gripSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gripSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw modern chip-junction nodes at grid intersects
      const nodeCount = 24;
      for (let i = 0; i < nodeCount; i++) {
        const gridX = Math.floor((i * 137.97) % (width / gripSpacing)) * gripSpacing;
        const gridY = Math.floor((i * 283.43) % (height / gripSpacing)) * gripSpacing;
        
        ctx.fillStyle = i % 2 === 0 ? "rgba(212, 175, 55, 0.2)" : "rgba(193, 18, 31, 0.2)";
        ctx.beginPath();
        ctx.arc(gridX, gridY, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = i % 2 === 0 ? "rgba(212, 175, 55, 0.07)" : "rgba(193, 18, 31, 0.07)";
        ctx.beginPath();
        ctx.arc(gridX, gridY, 10, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Draw flowing traces with shining signal head
      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        if (trace.points.length < 2) continue;

        ctx.strokeStyle = trace.color;
        ctx.lineWidth = trace.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Draw fully processed trace lines
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);

        // Find current position along the points-path
        const totalPoints = trace.points.length;
        const currentSegmentProgress = trace.progress * (totalPoints - 1);
        const activeSegmentIdx = Math.floor(currentSegmentProgress);
        const segmentRemainder = currentSegmentProgress - activeSegmentIdx;

        for (let j = 0; j <= activeSegmentIdx; j++) {
          if (j < totalPoints) {
            ctx.lineTo(trace.points[j].x, trace.points[j].y);
          }
        }

        let signalHeadX = trace.points[0].x;
        let signalHeadY = trace.points[0].y;

        if (activeSegmentIdx < totalPoints - 1) {
          const pStart = trace.points[activeSegmentIdx];
          const pEnd = trace.points[activeSegmentIdx + 1];
          signalHeadX = pStart.x + (pEnd.x - pStart.x) * segmentRemainder;
          signalHeadY = pStart.y + (pEnd.y - pStart.y) * segmentRemainder;
          ctx.lineTo(signalHeadX, signalHeadY);
        }

        ctx.stroke();

        // Draw glowing electrical pulse (signal head) - gold or crimson
        const isGoldTrace = trace.color.includes("212") || trace.color.includes("244");
        ctx.fillStyle = isGoldTrace ? "rgba(244, 197, 66, 0.95)" : "rgba(193, 18, 31, 0.95)";
        ctx.shadowColor = isGoldTrace ? "rgba(244, 197, 66, 0.8)" : "rgba(193, 18, 31, 0.8)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(signalHeadX, signalHeadY, trace.width + 2.0, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow defaults to prevent slow canvas operations else-where
        ctx.shadowBlur = 0;

        // Progress traces
        trace.progress += trace.speed;
        if (trace.progress >= 1) {
          // Replace trace once completed
          traces[i] = createNewTrace();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block pointer-events-none transition-colors duration-500"
      style={{ opacity: isDark ? 0.8 : 0.4 }}
    />
  );
}
