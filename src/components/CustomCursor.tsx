import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let rafId: number;
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      // Smooth following logic
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`;
        cursorRef.current.style.top = `${curY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect interactive elements globally
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, .interactive-cursor");
      setIsHovering(!!isInteractive);
    };

    // Listen for movement and hover globally
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? "hovering" : ""}`} />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};

export default CustomCursor;
