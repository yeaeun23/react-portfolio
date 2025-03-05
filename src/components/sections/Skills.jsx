import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: FaHtml5, name: "HTML", level: "상" },
    { icon: FaCss3Alt, name: "CSS", level: "상" },
    { icon: IoLogoJavascript, name: "JavaScript", level: "상" },
    { icon: BiLogoTypescript, name: "TypeScript", level: "상" },
    { icon: FaReact, name: "ReactJS", level: "상" },
    { icon: SiExpress, name: "Express", level: "상" },
    { icon: FaNodeJs, name: "NodeJS", level: "상" },
    { icon: SiTailwindcss, name: "Tailwind", level: "상" },
    { icon: FaGitAlt, name: "Git", level: "상" },
    { icon: DiGithubBadge, name: "Github", level: "상" },
    { icon: SiPostman, name: "Postman", level: "상" },
    { icon: FaAws, name: "AWS EC2", level: "상" },
    { icon: BiLogoPostgresql, name: "PostgreSQL", level: "상" },
  ];

  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">기술 스택</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
            data-aos="flip-left"
            data-aos-delay={index * 50}
          >
            <skill.icon className="text-2xl" />
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
