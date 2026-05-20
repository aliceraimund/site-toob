import { useRef, type ReactNode, type CSSProperties } from "react";

export function MagneticButton({
  as: As = "button",
  children,
  className,
  style,
  strength = 6,
  ...rest
}: {
  as?: any;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
  [k: string]: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength * 2;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <As
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform .25s ease", ...style }}
      {...rest}
    >
      {children}
    </As>
  );
}
