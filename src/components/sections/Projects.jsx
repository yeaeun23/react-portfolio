import user_project from "../../data/user_project.js";
import Project from "../Project.jsx";

function Projects() {
  const categories = {
    "퍼블리싱 · 리액트(ReactJS)": user_project.projects,
    "CSS 애니메이션 · Canvas": user_project.projects2,
    "C# · ASP.NET": user_project.projects3,
    "C# · 윈도우 응용 프로그램": user_project.projects4,
  };

  return (
    <section id="projects" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">프로젝트</h4>

      {Object.entries(categories).map(([category, projects], index) => (
        <div key={index}>
          {index !== 0 && <hr className="mt-12 border border-zinc-100 dark:border-zinc-800" />}

          {/* =========== 프로젝트 구분 =========== */}
          <h3
            className={`text-2xl font-semibold text-center dark:text-white ${
              index === 0 ? "mt-12" : "mt-16"
            }`}
          >
            {category}
          </h3>

          {/* =========== 프로젝트 =========== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, idx) => (
              <Project key={idx} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
