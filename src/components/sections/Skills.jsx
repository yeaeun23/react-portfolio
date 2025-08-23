import { VscVscode } from "react-icons/vsc";
import {
  SiTailwindcss,
  SiMui,
  SiNotion,
  SiAdobephotoshop,
  SiFigma,
  SiIntellijidea,
  SiDotnet,
  SiStyledcomponents,
  SiJira,
  SiSwagger,
  SiPostman,
  SiMysql,
  SiNpm,
  SiVite,
  SiSlack,
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiDiscord,
  SiReact,
  SiBootstrap,
  SiSass,
  SiGit,
  SiAmazonwebservices,
} from "react-icons/si";

function Skills() {
  // period: 1년 미만, 1~3년, 3~5년, 5~7년, 7~9년, 9년 이상
  // level: 상, 중, 하
  const skills = [
    { name: "HTML", icon: SiHtml5, period: "9년 이상", level: "상" },
    { name: "CSS", icon: SiCss3, period: "9년 이상", level: "상" },
    { name: "JavaScript", icon: SiJavascript, period: "3~5년", level: "중" },
    { name: "jQuery", icon: SiJquery, period: "3~5년", level: "중" },

    { name: "ReactJS", icon: SiReact, period: "1~3년", level: "중" },
    { name: "TypeScript", icon: SiTypescript, period: "1~3년", level: "상" },
    { name: "npm", icon: SiNpm, period: "1~3년", level: "중" },
    { name: "Vite", icon: SiVite, period: "1~3년", level: "하" },

    { name: "C#.NET", icon: SiDotnet, period: "3~5년", level: "중" },

    { name: "SCSS", icon: SiSass, period: "1~3년", level: "중" },
    { name: "Tailwind", icon: SiTailwindcss, period: "1년 미만", level: "하" },
    { name: "Styled Components", icon: SiStyledcomponents, period: "1~3년", level: "상" },

    { name: "Bootstrap", icon: SiBootstrap, period: "3~5년", level: "상" },
    { name: "Material UI", icon: SiMui, period: "1년 미만", level: "중" },

    { name: "MySQL", icon: SiMysql, period: "5~7년", level: "중" },
    { name: "Postman", icon: SiPostman, period: "3~5년", level: "중" },
    { name: "Swagger UI", icon: SiSwagger, period: "1~3년", level: "중" },

    { name: "AWS", icon: SiAmazonwebservices, period: "1년 미만", level: "하" },

    { name: "VSCode", icon: VscVscode, period: "3~5년", level: "상" },
    { name: "IntelliJ", icon: SiIntellijidea, period: "1~3년", level: "중" },

    { name: "Photoshop", icon: SiAdobephotoshop, period: "1~3년", level: "하" },
    { name: "Figma", icon: SiFigma, period: "1년 미만", level: "하" },

    { name: "Git", icon: SiGit, period: "1~3년", level: "중" },
    { name: "Github", icon: SiGithub, period: "1~3년", level: "중" },
    { name: "Notion", icon: SiNotion, period: "1년 미만", level: "중" },
    { name: "Jira", icon: SiJira, period: "1년 미만", level: "하" },
    { name: "Discord", icon: SiDiscord, period: "1년 미만", level: "중" },
    { name: "Slack", icon: SiSlack, period: "1년 미만", level: "중" },
  ];

  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">기술 스택</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"
            data-aos="flip-left"
            data-aos-delay={index * 50}
          >
            <skill.icon className="text-2xl" />
            <span className="text-base">{skill.name}</span>
            <span className="text-sm">
              <span>{skill.period}</span> · <span>{skill.level}</span>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
