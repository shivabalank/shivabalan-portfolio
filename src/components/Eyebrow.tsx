interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`eyebrow-badge ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
      {children}
    </span>
  );
}
