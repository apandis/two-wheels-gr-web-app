"use client";
import { ClientTableHeader } from "@/components/admin/ClientTableHeader";

interface HeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder: string;
}

export function TableHeader({
  title,
  subtitle,
  searchPlaceholder,
}: HeaderProps) {
  return (
    <ClientTableHeader
      title={title}
      subtitle={subtitle}
      searchPlaceholder={searchPlaceholder}
      onSearchChange={(value) => {
        // This is a server action, so we can't directly handle the change here.
        // You might want to use a form with a server action instead.
        console.log("Search changed:", value);
      }}
      onFilterClick={() => {
        // This is a server action, so we can't directly handle the click here.
        // You might want to use a form with a server action instead.
        console.log("Filter clicked");
      }}
      onNewClick={() => {
        // This is a server action, so we can't directly handle the click here.
        // You might want to use a form with a server action instead.
        console.log("New clicked");
      }}
    />
  );
}
