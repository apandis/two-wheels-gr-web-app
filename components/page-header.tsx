"use client";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PageHeader({
  title,
  subtitle,
  className,
  ariaLabel,
}: PageHeaderProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`w-full py-6 md:py-8 bg-gray-50 ${className ?? ""}`}
    >
      <motion.div
        className="px-8"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
