/**
 * A small pink butterfly that drifts across the viewport on a loop.
 * Purely decorative — pointer-events-none, aria-hidden, respects
 * prefers-reduced-motion (handled in globals.css).
 */
export default function FlyingButterfly() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 animate-butterfly-drift"
        style={{ willChange: "transform, opacity" }}
      >
        <svg
          width="42"
          height="34"
          viewBox="-30 -22 60 44"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.18))",
          }}
        >
          <defs>
            <radialGradient id="bfWingPink" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#fce4ea" stopOpacity="1" />
              <stop offset="100%" stopColor="#e898b0" stopOpacity="0.9" />
            </radialGradient>
          </defs>

          {/* Left wings — flap together as a group */}
          <g className="butterfly-wing-left">
            <path
              d="M0 0 Q-12 -11 -22 -10 Q-29 -7 -28 0 Q-25 6 -17 7 Q-8 7 -3 4 Z"
              fill="url(#bfWingPink)"
              opacity="0.95"
            />
            <path
              d="M0 4 Q-8 9 -12 16 Q-14 20 -10 21 Q-4 20 -1 16 Q0 11 0 7 Z"
              fill="url(#bfWingPink)"
              opacity="0.88"
            />
            <circle cx="-18" cy="-6" r="1.1" fill="#8a3a52" opacity="0.7" />
          </g>

          {/* Right wings */}
          <g className="butterfly-wing-right">
            <path
              d="M0 0 Q12 -11 22 -10 Q29 -7 28 0 Q25 6 17 7 Q8 7 3 4 Z"
              fill="url(#bfWingPink)"
              opacity="0.95"
            />
            <path
              d="M0 4 Q8 9 12 16 Q14 20 10 21 Q4 20 1 16 Q0 11 0 7 Z"
              fill="url(#bfWingPink)"
              opacity="0.88"
            />
            <circle cx="18" cy="-6" r="1.1" fill="#8a3a52" opacity="0.7" />
          </g>

          {/* Body */}
          <path
            d="M0 -3 Q-0.9 3 -0.9 14 Q-0.6 19 0 22 Q0.6 19 0.9 14 Q0.9 3 0 -3 Z"
            fill="#3a2030"
            opacity="0.92"
          />
          <circle cx="0" cy="-3" r="1.3" fill="#3a2030" />

          {/* Antennae */}
          <path
            d="M-0.5 -5 Q-4 -10 -6 -13"
            stroke="#3a2030"
            strokeWidth="0.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M0.5 -5 Q4 -10 6 -13"
            stroke="#3a2030"
            strokeWidth="0.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="-6" cy="-13" r="0.9" fill="#3a2030" />
          <circle cx="6" cy="-13" r="0.9" fill="#3a2030" />
        </svg>
      </div>
    </div>
  );
}
