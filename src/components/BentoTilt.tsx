import { useRef, useState, type ReactNode } from "react";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = itemRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const { left, top, width, height } = rect;

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: transformStyle,
        transition: "transform 160ms ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
