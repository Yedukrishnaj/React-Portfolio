import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to make the animation smooth

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="HeroSection"
      className="hero-section relative bg-cover bg-center h-screen flex flex-col items-start justify-center text-white px-6 md:px-12"
    >
      <div className="relative container mx-auto z-10 flex flex-col justify-center space-y-6">
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
          <div className="keyboard flex space-x-2">
            <span className="key">W</span>
            <span className="key">E</span>
            <span className="key">L</span>
            <span className="key">C</span>
            <span className="key">O</span>
            <span className="key">M</span>
            <span className="key">E</span>
          </div>
        </h1>

        <p
          className={`hero-section-description text-lg md:text-2xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-left`}
        >
          Hi, my name is Yedukrishna Jayan, a Software Quality Assurance professional currently based in Liverpool, UK.
        </p>

        <div className="mt-auto"></div>
      </div>

      {/* Lottie Animation */}
      <div className="lottie-container mb-8 md:mb-0 order-1 md:order-0">
        <DotLottieReact src="img/Animation - 1735651984060.lottie" autoplay />
      </div>
    </section>
  );
}
