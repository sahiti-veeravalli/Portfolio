import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(82 85% 55% / 0.6) 0%, hsl(82 85% 55% / 0.15) 40%, transparent 70%)",
        filter: "blur(2px)",
        transition: "left 0.05s linear, top 0.05s linear",
      }}
    />
  );
};

export default CursorGlow;
