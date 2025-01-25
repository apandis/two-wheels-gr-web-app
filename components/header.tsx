"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X, LogIn } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import Logo from "@/components/logo";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Our Vehicles", href: "/vehicles" },
  { name: "Experiences", href: "/experiences" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div
          aria-label="Main Navigation"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          {/* Main Navigation */}
          <div
            className="hidden lg:flex lg:gap-x-12"
            aria-label="Main Navigation"
          >
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Header Action */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="secondary">
              <Link href="#">Login</Link>
              <LogIn />
            </Button>
            <Button asChild>
              <Link href="#">Check Availability</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Open main menu</span>
          </div>
        </div>
      </header>
    </>
  );
}
