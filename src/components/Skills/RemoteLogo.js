import React, { useState } from "react";

/* Devicon (colored) → Iconify (mono, recolored via ?color=) → text initials */
export default function RemoteLogo({ name, slug, size = 20, color = "#EAEAEA", className = "" }) {
    const [idx, setIdx] = useState(0);

    const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + slug + "/" + slug + "-original.svg";
    const iconify = "https://api.iconify.design/simple-icons:" + slug + ".svg?color=" + encodeURIComponent(color);

    if (idx === -1) {
        const initials = (name || "")
            .split(/[\s-]+/)
            .map((w) => (w[0] || "").toUpperCase())
            .join("")
            .slice(0, 3);
        return React.createElement(
            "span",
            {
                className: "logo-fallback " + className,
                style: { width: size, height: size, fontSize: Math.floor(size * 0.55) },
                title: name,
                "aria-label": name + " logo",
            },
            initials
        );
    }

    return React.createElement("img", {
        src: [devicon, iconify][idx],
        alt: name + " logo",
        width: size,
        height: size,
        loading: "lazy",
        className: "skill-logo " + className,
        style: { width: size, height: size, objectFit: "contain", verticalAlign: "middle" },
        onError: () => setIdx(idx < 1 ? idx + 1 : -1),
        title: name,
    });
}
