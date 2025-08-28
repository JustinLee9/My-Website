import "./Projects.css";
import project1 from "../../assets/project1-image.png";
import project3 from "../../assets/project3-image.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "SafeRoute",
            description: "PWA that highlights crime-dense areas using campus crime data, helping users plan safer routes.",
            languages: ["Python", "JavaScript", "CSS", "HTML", "Google Maps API"],
            thumbnail: project1,
            link: "https://github.com/JustinLee9/SafeRoute",
        },
        {
            id: 2,
            title: "Community Housing App",
            description: "A web app that allows users to manage shared housing tasks, schedules, and meal planning with GPT integration, Postgres backend, and Auth0 authentication.",
            languages: ["Python", "HTML", "JavaScript", "Flask", "Postgres", "Auth0", "GPT API"],
            thumbnail: "https://via.placeholder.com/300x180",
            link: "https://github.com/JustinLee9/Community-Housing-App",
        },
        {
            id: 3,
            title: "Todo App",
            description: "A full-stack Todo application built with React, Netlify Functions, and MongoDB. Supports adding, editing, marking complete, and viewing completed todos separately.",
            languages: ["React", "Node.js", "MongoDB", "Netlify Functions", "CSS Modules"],
            thumbnail: project3,
            link: "https://github.com/JustinLee9/Todo-List",
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
                    <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" style={{ backgroundImage: `url(${p.thumbnail})` }}>
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
