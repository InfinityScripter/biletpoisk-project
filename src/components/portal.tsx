import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";

type PortalProps = {
  selector: string;
  children: React.ReactNode;
};

export default function Portal({ selector, children }: PortalProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && !!ref.current
    ? createPortal(<>{children}</>, ref.current)
    : null;
}
