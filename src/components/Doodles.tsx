// Small hand-drawn decorative SVGs. Kept subtle and used sparingly across sections.
// All strokes use currentColor so callers can tint them via className.

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 40 C 30 10, 60 8, 92 28" />
      <path d="M74 18 L 93 28 L 80 44" />
    </svg>
  );
}

export function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 3 L23.5 15.5 L36 18 L23.5 21 L20 34 L16.5 21 L4 18 L16.5 15.5 Z" />
    </svg>
  );
}

export function DoodleBrackets({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M28 4 C 16 4, 14 10, 14 20 C 14 30, 16 36, 28 36" />
      <path d="M52 4 C 64 4, 66 10, 66 20 C 66 30, 64 36, 52 36" />
    </svg>
  );
}

export function DoodleBulb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 52"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 3 C 10 3, 5 11, 6 19 C 6.7 24.5, 11 27, 12 32 L 28 32 C 29 27, 33.3 24.5, 34 19 C 35 11, 30 3, 20 3 Z" />
      <path d="M13 37 H 27" />
      <path d="M15 43 H 25" />
      <path d="M20 32 V 20" />
    </svg>
  );
}

export function DoodleTerminal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="44" height="32" rx="4" />
      <path d="M10 15 L 18 20 L 10 25" />
      <path d="M24 25 H 34" />
    </svg>
  );
}

export function DoodleSparkAI({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 4 L23 16 L35 19 L23 22 L20 34 L17 22 L5 19 L17 16 Z" />
      <circle cx="32" cy="8" r="2.5" />
      <circle cx="6" cy="30" r="1.8" />
    </svg>
  );
}

export function DoodleDatabase({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 46"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="20" cy="9" rx="16" ry="6" />
      <path d="M4 9 V 37 C 4 40.3 11.2 43 20 43 C 28.8 43 36 40.3 36 37 V 9" />
      <path d="M4 23 C 4 26.3 11.2 29 20 29 C 28.8 29 36 26.3 36 23" />
    </svg>
  );
}

export function DoodleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 18"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M4 11 C 60 4, 140 4, 196 11" />
    </svg>
  );
}

export function DoodleCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M60 8 C 90 8, 112 32, 111 62 C 110 92, 87 112, 58 111 C 29 110, 9 87, 9 58 C 9 30, 32 9, 60 8 Z" />
    </svg>
  );
}

export function DoodleBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M45.8,-58.3C58.6,-49.4,67.3,-33.9,71.2,-17.1C75.1,-0.4,74.1,17.6,66.4,32.3C58.7,47,44.2,58.5,27.9,65.4C11.6,72.3,-6.6,74.7,-23.6,70.2C-40.6,65.7,-56.4,54.3,-65.6,39C-74.8,23.7,-77.4,4.5,-73.4,-12.9C-69.4,-30.2,-58.9,-45.6,-45,-54.8C-31.1,-64,-15.6,-67,0.9,-68.1C17.3,-69.2,33,-67.3,45.8,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function DoodleHeart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 36"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 33 C 6 24, 2 15, 4 9 C 6 3, 15 1, 20 10 C 25 1, 34 3, 36 9 C 38 15, 34 24, 20 33 Z" />
    </svg>
  );
}
