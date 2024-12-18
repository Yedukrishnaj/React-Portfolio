export default function Hero() {
    return (
        <section id="HeroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I`m Yedu</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Computing and IT Management</span>{""}
                        <br/>
                        Graduate
                    </h1>
                    <p className="hero-section-description">Hello, I am a Masters graduate from Cardiff University. I have a strong passion for Computers and I am always eager to learn new skills and technologies related to my field of study. During my time as a student, I have gained valuable experience through various projects. These projects have helped me to improve my technical skills, work effectively in a team, and manage projects from start to finish. In my spare time, I enjoy watching movies and playing video games. Thank you for visiting my website!
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/daqf.jpg" alt="Hero Section"/>
            </div>
        </section>
        
    )
    ;
}