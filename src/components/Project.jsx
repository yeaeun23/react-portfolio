function Project({ project, delay }) {
  return (
    <a
      target="_blank"
      href={project.link}
      title="더보기"
      className="group hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 rounded-xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* =========== 이미지 =========== */}
      {project.image && (
        <div className="relative w-full h-40 rounded-xl mb-3 border border-solid border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* =========== 프로젝트명 =========== */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-200">{project.title}</h3>

      {/* =========== 기간 =========== */}
      <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400 mt-1">
        {project.period}
      </p>

      {/* =========== 설명 =========== */}
      {project.descriptions && (
        <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-3">
          {project.descriptions.map((description, index) => {
            return (
              <li className="flex items-start space-x-1 mt-1" key={index}>
                <svg
                  className="flex-shrink-0 size-4 text-red-800 dark:text-red-500 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span className="text-base text-zinc-500 dark:text-zinc-400">{description}</span>
              </li>
            );
          })}
        </ul>
      )}

      {/* =========== 기술 스택 =========== */}
      <div className="flex gap-2 flex-wrap mt-3">
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
