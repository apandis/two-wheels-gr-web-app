import type { Metadata } from "next";
import Header from "@/components/header";
import ClientWrapper from "./ClientWrapper"; // Import the client-side wrapper

import "./globals.css";

export const metadata: Metadata = {
  title: "Two Wheels",
  description: "Two wheels vehicle rentals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>
          <ClientWrapper>{children}</ClientWrapper>
        </main>
      </body>
    </html>
  );
}
