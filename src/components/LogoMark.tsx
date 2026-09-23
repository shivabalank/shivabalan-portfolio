interface LogoMarkProps {
  className?: string;
}

export default function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="17" fill="#DFF8D5" stroke="#0B3D20" strokeWidth="2" />
      <path
        d="M15 14 L9 20 L15 26"
        stroke="#0B3D20"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 14 L31 20 L25 26"
        stroke="#0B3D20"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="22.5"
        y1="12"
        x2="17.5"
        y2="28"
        stroke="#0B3D20"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
