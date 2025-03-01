import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: BiLogoTypescript, name: "TypeScript" },
    { icon: FaReact, name: "ReactJS" },
    { icon: SiExpress, name: "Express" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: FaGitAlt, name: "Git" },
    { icon: DiGithubBadge, name: "Github" },
    { icon: SiPostman, name: "Postman" },
    { icon: FaAws, name: "AWS EC2" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
  ];

  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">기술 스택</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {skills.map(({ icon: Icon, name }, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
          >
            <Icon className="text-2xl" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
