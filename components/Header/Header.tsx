import Link from "next/link";
import React from "react";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => (
  <Link href={href} className="text-lg underline-offset-4 hover:underline">
    {children}
  </Link>
);

function Header() {
  return (
    <div className="flex h-14 flex-none items-center justify-between gap-x-4 px-4">
      <p className="font-bold">Forte Frontend Academy</p>
      <div className="flex gap-x-4">
        <HeaderLink href="/pamelding">Påmelding</HeaderLink>
        <HeaderLink href="/ressurser">Ressurser</HeaderLink>
      </div>
    </div>
  );
}

export default Header;
