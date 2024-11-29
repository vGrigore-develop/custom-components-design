import { useMemo } from 'react';

const GlassmorphicBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCiAgPGZpbHRlciBpZD0ibm9pc2UiIHg9IjAiIHk9IjAiPg0KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+DQogICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+DQogIDwvZmlsdGVyPg0KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+DQo8L3N2Zz4=')] opacity-50" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse [animation-delay:4s]"></div>

      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: particle.duration,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default GlassmorphicBackground;