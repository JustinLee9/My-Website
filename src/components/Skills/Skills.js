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
};
function slugify(name) {
  return (
    OVERRIDES[name] ||
    name.toLowerCase().replace(/[\s._]+/g, "").replace(/\+/g, "plus")
  );
}

const CATEGORIES = [
  { title: "Languages", className: "skills-lang", items: ["Python", "Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "R"] },
  { title: "Frameworks", className: "skills-frameworks", items: ["React", "Auth0", "Flask"] },
  { title: "Tools & Platforms", className: "skills-tools", items: ["Git", "Linux", "MongoDB", "Microsoft Azure"] },
  { title: "Libraries", className: "skills-libs", items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
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
