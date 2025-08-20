import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        <article className="about-card">
          <h3 className="about-card-title">Background</h3>
          <p>
            My passion for software development began in high school via AP CS, where I discovered
            the power of building apps with both practical value and polish. I recently earned a B.S.
            in Computer Science from the University of Minnesota. I specialize in Python, React, and Java,
            with a focus on web development and a growing interest in mobile.
          </p>
        </article>
        <article className="about-card">
          <h3 className="about-card-title">Personal</h3>
          <p>
            Outside of engineering, I'm an avid PC gamer and a consistent gym goer focused on strength training.
            I unwind with movies and TV—especially sci-fi, thrillers, and action—and those ideas often flow back into my projects.
          </p>
        </article>
      </div>
    </section>
  );
}
