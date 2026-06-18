import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, duration, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default Counter;