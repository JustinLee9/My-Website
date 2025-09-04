import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const sectionsRef = useRef([]);

  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => { if (window.innerWidth >= 750) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Observe sections to set the active link
  useEffect(() => {
    sectionsRef.current = items
      .map(i => document.querySelector(i.href))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        // Sort by intersection ratio so the most visible wins
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive("#" + visible.target.id);
        }
      },
      {
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement)
                      .getPropertyValue('--navbar-h')) + 16}px 0px -40% 0px`,
        threshold: [0.35, 0.6, 0.9],
      }
    );

    sectionsRef.current.forEach(el => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="nav-brand" href="#home" aria-label="Go to home">
          Justin<span className="accent">Lee</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <ul>
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className={active === it.href ? "is-active" : ""}
                  aria-current={active === it.href ? "page" : undefined}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
