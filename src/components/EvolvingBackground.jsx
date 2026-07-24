import React, { useEffect, useRef } from 'react';

export default function EvolvingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Neural & Sacred Geometry Nodes
    const numNodes = 45;
    const nodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.5 ? 'rgba(15, 118, 110, ' : 'rgba(212, 160, 23, ',
      phase: Math.random() * Math.PI * 2
    }));

    let tick = 0;

    const render = () => {
      tick += 0.008;

      // Soft Warm Luxury Light Background
      ctx.fillStyle = '#F7F3EB';
      ctx.fillRect(0, 0, width, height);

      // Render Topographic Contour Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(232, 220, 200, 0.35)';

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const yOffset = height * (0.2 + i * 0.22);
        for (let x = 0; x < width; x += 15) {
          const y = yOffset + Math.sin(x * 0.004 + tick + i) * 45 + Math.cos(x * 0.002 - tick) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Render Floating Sacred Geometry Mandala Ring in Background
      const centerX = width / 2;
      const centerY = height * 0.35;
      const mandalaRadius = 240 + Math.sin(tick) * 20;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(tick * 0.05);

      ctx.strokeStyle = 'rgba(212, 160, 23, 0.08)';
      ctx.lineWidth = 1.2;

      for (let petals = 0; petals < 8; petals++) {
        ctx.rotate((Math.PI * 2) / 8);
        ctx.beginPath();
        ctx.arc(mandalaRadius * 0.4, 0, mandalaRadius * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Render Evolving Neural Network & Botanical Nodes
      for (let i = 0; i < numNodes; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx + Math.sin(tick + n1.phase) * 0.2;
        n1.y += n1.vy + Math.cos(tick + n1.phase) * 0.2;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Draw Nodes
        const alpha = 0.25 + Math.sin(tick * 2 + n1.phase) * 0.15;
        ctx.fillStyle = `${n1.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect Nodes with Golden/Emerald Filaments
        for (let j = i + 1; j < numNodes; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const lineAlpha = (1 - dist / 160) * 0.18;
            ctx.strokeStyle = i % 2 === 0 ? `rgba(15, 118, 110, ${lineAlpha})` : `rgba(212, 160, 23, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
