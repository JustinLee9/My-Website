import "./Hero.css";

const LINKS = [
    {
        href: "https://www.linkedin.com/in/justin-lee-85b2a8224/",
        label: "LinkedIn",
        aria: "Open LinkedIn profile",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M6.94 8.5v12H3.63v-12h3.31ZM5.28 3.5a2.06 2.06 0 1 1 0 4.12 2.06 2.06 0 0 1 0-4.12ZM20.36 20.5h-3.3v-6.56c0-1.56-.56-2.63-1.95-2.63-1.06 0-1.7.71-1.98 1.39-.1.24-.12.59-.12.94v6.86h-3.3s.04-11.14 0-12.31h3.3v1.75c.44-.68 1.22-1.65 2.98-1.65 2.17 0 3.79 1.42 3.79 4.46v7.75Z"
                />
            </svg>
        ),
    },
    {
        href: "https://github.com/JustinLee9",
        label: "GitHub",
        aria: "Open GitHub profile",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.06 1.56 1.06 .9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.36-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 7.07c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03 .56 1.36.21 2.37.1 2.62 .64.7 1.02 1.6 1.02 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.67.92.67 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                />
            </svg>
        ),
    },
    {
        href: "mailto:justinlee01656@gmail.com",
        label: "Email",
        aria: "Send me an email",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24l-8 4.76-8-4.76V6l8 4.76L20 6v2.24Z" />
            </svg>
        ),
    },
    {
        href: "/Justin_Lee_Resume.pdf",
        label: "Resume",
        aria: "Download resume",
        download: "Justin_Lee_Resume.pdf",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8l-6-6Zm0 2.83L17.17 8H14V4.83ZM8 11h8v2H8v-2Zm0 4h8v2H8v-2Z" />
            </svg>
        ),
    },
];

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-inner">
                <h1>
                    <span>Hi, I'm Justin Lee</span>
                </h1>
                <p className="hero-sub">Software and Web Developer</p>
                <ul className="hero-links" aria-label="Social links">
                    {LINKS.map(({ href, label, aria, svg, download }) => (
                        <li key={label}>
                            <a href={href} target={href.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer" aria-label={aria} {...(download && { download })}>
                                <span className="hero-icon">{svg}</span>
                                <span className="hero-link-text">{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
