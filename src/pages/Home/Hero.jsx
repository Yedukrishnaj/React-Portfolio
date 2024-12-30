import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the fade-in effect work on page load
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of 500ms before animation starts

    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  }, []);

  return (
    <section
      id="HeroSection"
      className="relative bg-cover bg-center h-screen flex flex-col items-start justify-center text-white px-6 md:px-12"
      style={{ backgroundImage: 'url(/img/5184015.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}

      <div className="relative container mx-auto z-10 flex flex-col justify-center space-y-6">
        {/* Fade-in text */}
        <p
          className={`section-title text-lg font-semibold transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-left`}
        >
          {/* Hey, I`m Yedu */}
        </p>

        <h1
          className={`hero-section-title text-4xl md:text-5xl font-extrabold leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-left`}
        >
          <span className="hero-section-title-color text-primary">WELCOME</span>
        </h1>

        <p
          className={`hero-section-description text-lg md:text-2xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-left`}
        >
          Hi, my name is Yedukrishna Jayan, a Software Quality Assurance professional. Based currently in Liverpool, UK, I specialize in manual testing, defect management, and test case creation using tools like Jira and TestRail. I’ve worked on various projects ranging from game development to healthcare platforms, always striving to improve product performance and deliver reliable, bug-free results.
        </p>

        {/* Move button to the bottom */}
        <div className="mt-auto">
          <button
            className="btn btn-primary px-6 py-3 bg-primary text-white font-semibold text-lg rounded-full hover:bg-opacity-80 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-1/3 md:w-1/4 p-6 md:p-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* <img src="./img/adfs.jpg" alt="Hero Section" className="rounded-lg shadow-lg" /> */}
      </div>
      
    </section>
  );
}
