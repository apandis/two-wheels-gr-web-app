import React from "react";
import { Button } from "@/components/ui/button";

interface ActionProps {
  text: string;
  ariaLabel?: string;
  link?: string;
  onClick?: () => void;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  ariaLabel?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

export function AdminPageHeader({
  title,
  subtitle,
  className,
  ariaLabel,
  primaryAction,
  secondaryAction,
}: PageHeaderProps) {
  return (
    <header
      aria-label={ariaLabel}
      className={`w-full py-6 md:py-8 bg-gray-50 ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
            )}
          </div>
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4 md:justify-end">
              {primaryAction &&
                (primaryAction.link ? (
                  <a
                    href={primaryAction.link}
                    aria-label={primaryAction.ariaLabel}
                  >
                    <Button variant="default" onClick={primaryAction.onClick}>
                      {primaryAction.text}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="default"
                    onClick={primaryAction.onClick}
                    aria-label={primaryAction.ariaLabel}
                  >
                    {primaryAction.text}
                  </Button>
                ))}

              {secondaryAction &&
                (secondaryAction.link ? (
                  <a
                    href={secondaryAction.link}
                    aria-label={secondaryAction.ariaLabel}
                  >
                    <Button variant="outline" onClick={secondaryAction.onClick}>
                      {secondaryAction.text}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    onClick={secondaryAction.onClick}
                    aria-label={secondaryAction.ariaLabel}
                  >
                    {secondaryAction.text}
                  </Button>
                ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
