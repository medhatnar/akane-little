"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/reiki', label: 'Reiki' },
  { href: '/training', label: 'Training' },
  { href: '/booking', label: 'Booking' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="brand">
        <span className="ring"></span> AKANE LITTLE HOLISTIC
      </div>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>
      <nav>
        <ul className={open ? "open" : ""}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
