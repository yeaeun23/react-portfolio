import { useEffect } from "react";
import ToggleTheme from "./ToggleTheme.jsx";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import Footer from "./sections/Footer.jsx";
import AOS from "aos";

function ProjectDetail() {
  const { theme, switchTheme } = useContext(AppContext);
  const categories = [
    { label: "메인 화면", prefix: "main", count: 1 },
    { label: "모바일 화면", prefix: "mobile", count: 8 },
    { label: "전자전표 화면", prefix: "pc", count: 32 },
    // { label: "팝업 화면", prefix: "pop", count: 10 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <section className="mx-4 lg:mx-20">
          <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
            GS건설 차세대 전자전표
          </h4>
          <h5 className="text-xl font-bold text-center mt-2 text-gray-500 dark:text-gray-400">
            (디자인 시스템 / IBsheet8 활용)
          </h5>

          {categories.map((category, index) => {
            return (
              <div key={index}>
                {index !== 0 && (
                  <hr className="mt-12 border border-zinc-100 dark:border-zinc-800" />
                )}

                <h3
                  className={`text-2xl font-semibold text-center dark:text-white ${
                    index === 0 ? "mt-12" : "mt-16"
                  }`}
                >
                  {category.label}
                </h3>

                <div
                  className={`gap-6 mt-8 grid grid-cols-1 ${
                    category.prefix === "main"
                      ? "sm:grid-cols-1 lg:grid-cols-1"
                      : category.prefix === "mobile"
                      ? "sm:grid-cols-2 lg:grid-cols-4"
                      : "sm:grid-cols-1 lg:grid-cols-2"
                  }`}
                >
                  {Array.from({ length: category.count }).map((_, i) => (
                    <img
                      key={i}
                      src={`${import.meta.env.BASE_URL}images/project/detail/${category.prefix}${
                        i + 1
                      }.png`}
                      alt="화면"
                      className="border border-gray-300"
                      data-aos="fade-up"
                      data-aos-delay={i * 25}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default ProjectDetail;
