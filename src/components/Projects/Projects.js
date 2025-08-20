import "./Projects.css";
import project1 from "../../assets/project1-image.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SafeRoute",
      description: "PWA that highlights crime‑dense areas using campus crime data, helping users plan safer routes.",
      languages: ["Python", "JavaScript", "CSS", "HTML"],
      thumbnail: project1,
      link: "https://github.com/JustinLee9/SafeRoute",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Placeholder",
      languages: ["Placeholder"],
      thumbnail: "https://via.placeholder.com/300x180",
      link: "https://example.com",
    },
    {
      id: 3,
      title: "Community Housing App",
      description: "Placeholder",
      languages: ["Placeholder"],
      thumbnail: "https://via.placeholder.com/300x180",
      link: "https://github.com/JustinLee9/Community-Housing-App",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Placeholder",
      languages: ["Placeholder"],
      thumbnail: "https://via.placeholder.com/300x180",
      link: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ backgroundImage: `url(${p.thumbnail})` }}
          >
            <div className="overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="languages">{p.languages.join(", ")}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
