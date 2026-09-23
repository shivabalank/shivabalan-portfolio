import { useEffect, useMemo, useRef, useState } from "react";

interface RotatingRoleProps {
  roles: string[];
  className?: string;
}

const TYPE_SPEED = 55; // ms per character while typing
const DELETE_SPEED = 30; // ms per character while deleting
const HOLD_DURATION = 1800; // ms to hold the fully typed word
const PAUSE_BEFORE_TYPE = 300; // ms pause before typing the next word

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = () => setReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export default function RotatingRole({ roles, className = "" }: RotatingRoleProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">(
    "typing"
  );
  const timeoutRef = useRef<number | undefined>(undefined);

  const currentRole = useMemo(() => roles[roleIndex] ?? "", [roles, roleIndex]);

  useEffect(() => {
    if (reducedMotion) {
      setText(roles[0] ?? "");
      return;
    }

    if (phase === "typing") {
      if (text.length < currentRole.length) {
        timeoutRef.current = window.setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => setPhase("holding"), 200);
      }
    } else if (phase === "holding") {
      timeoutRef.current = window.setTimeout(() => setPhase("deleting"), HOLD_DURATION);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setText(currentRole.slice(0, text.length - 1));
        }, DELETE_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => setPhase("pausing"), PAUSE_BEFORE_TYPE);
      }
    } else if (phase === "pausing") {
      setRoleIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
    }

    return () => window.clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, phase, currentRole, reducedMotion]);

  return (
    <span className={className} aria-live="polite">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        {!reducedMotion && (
          <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] align-middle bg-primary ml-1 animate-blink" />
        )}
      </span>
    </span>
  );
}
