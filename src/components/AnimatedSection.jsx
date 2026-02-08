import { useRef, useEffect, useState } from "react";
import { useInView } from "../hooks/useScrollAnimation";

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationClass = hasAnimated
    ? `animate-${animation}`
    : "animate-hidden";
  const delayStyle = { animationDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
