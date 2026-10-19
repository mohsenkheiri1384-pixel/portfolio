import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { config } from "../data/config";

export default function Footer() {
  const links = [
    {
      icon: <FiGithub size={20} />,
      href: config.contact.github,
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      href: config.contact.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FiSend size={20} />,
      href: config.contact.telegram,
      label: "Telegram",
    },
    {
      icon: <FiMail size={20} />,
      href: `mailto:${config.contact.email}`,
      label: "Email",
    },
    {
      icon: <FiPhone size={20} />,
      href: `tel:${config.contact.phone}`,
      label: "Phone",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
