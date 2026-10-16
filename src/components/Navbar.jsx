import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiMail } from "react-icons/fi";
import { config } from "../data/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "خانه" },
    { href: "#about", label: "درباره من" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "#projects", label: "پروژه‌ها" },
    { href: "#contact", label: "تماس" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand">
          <img
            src="/images/logoo.png"
            alt={config.brandName}
            className="navbar-logo"
          />
          <span className="navbar-brand-text">{config.brandName}</span>
        </a>
        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
