"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default ClientWrapper;
