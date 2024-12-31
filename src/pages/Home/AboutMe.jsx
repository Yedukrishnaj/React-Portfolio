export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/daqf.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills--section--heading">About Me</h1>
            <p className="hero--section--description text-white">
              I’m a Software Quality Assurance professional with a Master’s in Computing and IT Management from Cardiff University. Originally a Computer Engineer, my interest in technology led me to transition into software testing, where I focus on ensuring high-quality and reliable software.
            </p>
            <p className="hero--section--description text-white">
              My expertise spans manual testing, defect tracking, and test case management, with experience in tools like Jira and TestRail. I’m passionate about continuous learning, exploring new technologies, and finding creative solutions to complex problems.
            </p><br />
            <a href="./img/YedukrishnaJayanResume.pdf" target="_blank" className="btn btn-primary">
              <strong>Download my CV</strong>
            </a>
          </div>
        </div>
      </section>
    );
  }
  