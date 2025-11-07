"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "./resizable-navbar";

type LandingNavbarProps = {
  isAuth?: boolean;
  onSignOut?: () => Promise<void>;
  onSignIn?: () => Promise<void>;
};

export function LandingNavbar({ isAuth = false, onSignOut, onSignIn }: LandingNavbarProps) {
  const navItems = [
    {
      name: "Portfolios",
      link: "#portfolios",
    },
    {
      name: "Features",
      link: "#features",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {isAuth ? (
              <>
                <NavbarButton as={Link} href="/library" variant="secondary">
                  Library
                </NavbarButton>
                {onSignOut ? (
                  <form action={onSignOut}>
                    <NavbarButton as="button" type="submit" variant="primary">
                      Sign out
                    </NavbarButton>
                  </form>
                ) : null}
              </>
            ) : (
              onSignIn ? (
                <form action={onSignIn}>
                  <NavbarButton as="button" type="submit" variant="secondary">
                    Login
                  </NavbarButton>
                </form>
              ) : (
                <NavbarButton variant="secondary">Login</NavbarButton>
              )
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {isAuth ? (
                <>
                  <NavbarButton
                    as={Link}
                    href="/library"
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="secondary"
                    className="w-full"
                  >
                    Library
                  </NavbarButton>
                  {onSignOut ? (
                    <form action={onSignOut} className="w-full">
                      <NavbarButton
                        as="button"
                        type="submit"
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        Sign out
                      </NavbarButton>
                    </form>
                  ) : null}
                </>
              ) : (
                onSignIn ? (
                  <form action={onSignIn} className="w-full">
                    <NavbarButton
                      as="button"
                      type="submit"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                  </form>
                ) : (
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Login
                  </NavbarButton>
                )
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}