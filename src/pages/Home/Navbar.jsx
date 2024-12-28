import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (

    
    <nav  className={`navbar ${navActive ? "active" : ""}`} >

<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
    {/* LOGO */}
    
      <div class="text-indigo-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
      </div>
    {/* LOGO ends */}
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div class="navbar--items w-full md:w-auto " className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul class="flex  justify-between">
          <li class="md:px-4 md:py-2 text-indigo-400 ">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          
          <li class="md:px-4 md:py-2 hover:text-indigo-400 hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li class="md:px-4 md:py-2 hover:text-indigo-500 hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
        </ul>

        
      </div>

    {/* Social Media */}
           <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
           <li class="p-1">
         <a href="https://www.linkedin.com/in/yedukrishna-j/" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">      
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28">
   <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
 </svg>

         </a>
       </li>
       <li class="p-1">
         <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
         <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="28" height="28">
  <path fill="currentColor" d="M248 8C111 8 0 119 0 256c0 109.1 70.8 202.1 168 235.8 12.3 2.3 16.8-5.3 16.8-11.7 0-5.9-.2-21.6-.3-42.6-68.5 14.9-82.8-31.2-82.8-31.2-11.2-28.5-27.4-36.1-27.4-36.1-22.3-15.2 1.7-14.9 1.7-14.9 24.7 1.7 37.7 25.7 37.7 25.7 25.4 43.3 66.6 30.8 83.1 23.6 2.6-18.4 9.9-30.8 18.3-37.9-55.8-6.4-114.2-27.8-114.2-123.9 0-27.3 9.7-49.5 25.6-67.1-2.6-6.4-11.1-32.2 2.4-67.1 0 0 20.9-6.7 68.3 25.6 19.8-5.5 41.1-8.3 62.1-8.3 21.1 0 42.3 2.8 62.1 8.3 47.4-32.3 68.3-25.6 68.3-25.6 13.5 34.9 5 60.7 2.4 67.1 15.9 17.6 25.6 39.8 25.6 67.1 0 96.1-58.4 117.5-114.2 123.9 10.2 8.7 19.3 25.8 19.3 51.9 0 37.5-.3 67.7-.3 76.8 0 6.5 4.4 14.1 17.1 11.7 97.2-33.7 168-126.8 168-235.8 0-137-111-248-248-248z"></path>
</svg>

         </a>
       </li>
       <li class="p-1">
         <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
         <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="email" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" fill="currentColor">
         <text x="32" y="32" font-size="72" text-anchor="middle" dy=".3em"> @ </text>
 </svg>

         </a>
       </li>
       
       <li class="p-1">
         <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
         <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28">
   <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
 </svg>

         </a>
       </li>
     </ul>
    {/* Social Media Ends */}

      <Link 
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
