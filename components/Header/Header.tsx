import Link from "next/link";
import React from "react";

import forteLogo from "assets/Forte_Symbol_white.svg";
import Image from "next/image";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => (
  <Link href={href} className="text-lg underline-offset-4 hover:underline">
    {children}
  </Link>
);

const Logo = () => (
  <Link href="/" className="flex items-center gap-x-3 py-2">
    <Image src={forteLogo} alt="" className="w-8" />
    <span className="text-lg font-bold">Frontend Academy</span>
  </Link>
);

function Header() {
  return (
    <div className="container mx-auto flex h-20 flex-none items-center justify-between gap-x-8 px-4">
      <Logo />
      <div className="flex gap-x-8">
        <HeaderLink href="/pamelding">Påmelding</HeaderLink>
        <HeaderLink href="/ressurser">Ressurser</HeaderLink>
      </div>
    </div>
  );
}

export default Header;
