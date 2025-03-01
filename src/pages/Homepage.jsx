import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme.jsx";
import Profile from "../components/sections/Profile.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Careers from "../components/sections/Careers.jsx";
import Careers2 from "../components/sections/Careers2.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Profile />
        <Careers />
        <Careers2 />
        <Projects />
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;
