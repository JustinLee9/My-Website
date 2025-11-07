import React from "react";
import "./Skills.css";
import RemoteLogo from "./RemoteLogo";

const OVERRIDES = {
  HTML: "html5",
  CSS: "css3",
  SQL: "postgresql",
  "Microsoft Azure": "microsoftazure",
  "Scikit-learn": "scikitlearn",
  NumPy: "numpy",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "TanStack Query": "reactquery",
};

function slugify(name) {
  return (
    OVERRIDES[name] ||
    name.toLowerCase().replace(/[\s._]+/g, "").replace(/\+/g, "plus")
  );
}

const CATEGORIES = [
  { title: "Languages", className: "skills-lang", items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "C"] },
  { title: "Frontend & Backend", className: "skills-frameworks", items: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Node.js", "Express", "NestJS", "Flask"] },
  { title: "Databases & Cloud", className: "skills-databases", items: ["MongoDB", "PostgreSQL", "Firebase", "Microsoft Azure", "Vercel", "Netlify"] },
  { title: "Tools & Libraries", className: "skills-tools", items: ["Git", "Linux", "Auth0", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Papa Parse"] },
];

function pill(name) {
  return React.createElement(
    "li",
    { key: name, className: "skill-pill" },
    [
      React.createElement(RemoteLogo, { key: name + "-logo", name, slug: slugify(name), size: 20, color: "#EAEAEA" }),
      " ",
      name,
    ]
  );
}

function box({ title, className, items }) {
  return React.createElement(
    "div",
    { key: className, className: "skills-card " + className },
    [
      React.createElement("h3", { key: "h", className: "skills-card-title" }, title),
      React.createElement("ul", { key: "ul", className: "skills-list" }, items.map(pill)),
    ]
  );
}

export default function Skills() {
  return React.createElement(
    "section",
    { id: "skills", className: "skills" },
    [
      React.createElement("h1", { key: "t", className: "skills-title" }, "Skills & Technologies"),
      React.createElement("div", { key: "g", className: "skills-grid" }, CATEGORIES.map(box)),
    ]
  );
}