import React, { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import Link from "next/link";

import forteLogo from "assets/Forte_Symbol_white.svg";
import Image from "next/image";
import Icon from "components/Icon";
import SlideoverDialog from "components/SlideoverDialog";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => (
  <Link
    href={href}
    className="text-lg font-bold underline-offset-4 transition duration-100 hover:text-red-300 hover:underline"
  >
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
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  const links = (
    <>
      <HeaderLink href="/tidsplan">Tidsplan</HeaderLink>
      <HeaderLink href="/faq">FAQ</HeaderLink>
      {/* <HeaderLink href="/pamelding">Påmelding</HeaderLink> */}
      {/* <HeaderLink href="/ressurser">Ressurser</HeaderLink> */}
    </>
  );

  return (
    <>
      <div className="container mx-auto flex h-20 flex-none items-center justify-between gap-x-8 px-4">
        <Logo />

        <div className="hidden gap-x-8 md:flex">{links}</div>
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Icon name="Bars3Icon" size="1.5em" />
        </button>
      </div>

      <SlideoverDialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchor="right"
        panelClassName="w-56 p-6 flex flex-col gap-y-4"
      >
        {links}
      </SlideoverDialog>
    </>
  );
}

export default Header;
