import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Two Wheels Logo</span>
      <Image
        src="/two_wheels_logo.svg"
        alt="Two Wheels Logo"
        width={108}
        height={108}
        priority
      />
    </Link>
  );
}
