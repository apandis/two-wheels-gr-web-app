"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-gray-500"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const capitalizedSegment =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={href} className="inline-flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-medium text-gray-900">
                  {decodeURIComponent(capitalizedSegment)}
                </span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {decodeURIComponent(capitalizedSegment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
