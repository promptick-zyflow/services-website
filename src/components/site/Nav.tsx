"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "border-b border-line bg-obsidian/70 backdrop-blur-xl"
          : "border-b border-transparent"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-2.5">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="px-5 py-2.5">
            Book a demo
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
            />
            <span
              className={`h-px w-5 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-obsidian/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contact"
              variant="primary"
              className="mt-2 w-full"
            >
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Zyflow Logo"
      className="h-8 w-auto object-contain"
    />
  );
}
