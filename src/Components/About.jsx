import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a BCA student and frontend developer learning React. I enjoy
              making responsive UI, solving problems and building projects that
              help me learn.
            </p>
            <ul>
              <li>Study: BCA (IGNOU)</li>
              <li>Interests: Web Development, JavaScript, React</li>
              <li>Languages: English, Hindi</li>
            </ul>
          </div>
          <div className="about-photo">
            <img src="/profile.jpg" alt="profile" onError={(e)=>{e.target.style.display='none'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}