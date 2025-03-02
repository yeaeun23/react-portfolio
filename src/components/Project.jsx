import { CiLink } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";

function Project({ project }) {
  return (
    <a
      target="_blank"
      href={project.link}
      title="클릭하세요!"
      className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl"
    >
      {
        /* =========== IMAGE =========== */
        project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-xl"
          />
        )
      }

      {/* =========== TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-3">{project.title}</h3>

      {/* =========== DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-1">
        {project.description}
      </p>

      {/* =========== SKILLS =========== */}
      <div className="flex gap-2 overflow-x-scroll mt-3">
        {project.skills.split(",").map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
}

export default Project;
