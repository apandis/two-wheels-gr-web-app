"use client";

import React from "react";
import { Search, ListFilter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ClientTableHeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder: string;
  onSearchChange?: (value: string) => void;
  onFilterClick: () => void;
  onNewClick: () => void;
}

export function ClientTableHeader({
  title,
  subtitle,
  searchPlaceholder,
  onSearchChange,
  onFilterClick,
  onNewClick,
}: ClientTableHeaderProps) {
  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Title and Subtitle */}
        <div className="gap-1 flex flex-col">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative w-full max-w-md order-2 md:order-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder={searchPlaceholder}
              className="pl-10"
              onChange={(e) => onSearchChange?.(e.target.value)}
              aria-label={searchPlaceholder}
            />
          </div>
          <div className="flex flex-row gap-4 order-1 md:order-2">
            <Button
              variant="outline"
              className="flex gap-2 order-2 md:order-1"
              onClick={onFilterClick}
            >
              <ListFilter className="h-4 w-4" /> Filters
            </Button>

            <Button
              variant="default"
              className="flex gap-2 order-1 md:order-2"
              onClick={onNewClick}
            >
              <Plus className="h-4 w-4" /> New
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
