import { useEffect } from "react";
import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  // 해당 id 영역으로 스크롤 이동
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 사진 툴팁
  const photoTooltip = (
    <span
      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
      role="tooltip"
    >
      {user_info.profile.tooltip}
    </span>
  );

  return (
    <section id="profile" className="mx-4 lg:mx-20 px-6 py-44">
      <div className="self-center">
        {/* =========== 작은 사진 =========== */}
        <div className="w-20 hs-tooltip [--placement:right] hs-tooltip-toggle" data-aos="zoom-in">
          <img
            src={user_info.profile.photo}
            alt="사진"
            className="rounded-full mb-6 md:hidden hover:animate-shake origin-center"
          />
          {photoTooltip}
        </div>

        <div className="flex align-center flex-wrap md:flex-nowrap justify-between">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <div data-aos="fade-right">
              <h1 className="font-black text-5xl lg:w-[85%]">{user_info.profile.title}</h1>
              <p className="mt-6 text-2xl font-medium lg:w-[87%]">{user_info.profile.subtitle}</p>
              <p className="mt-8 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7 text-zinc-500 whitespace-pre-line">
                {user_info.profile.description}
              </p>
            </div>

            {/* =========== 링크 =========== */}
            <div className="flex gap-2 mt-12" data-aos="fade-right">
              <a
                href="#"
                onClick={(e) => handleScroll(e, "projects")}
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                프로젝트
              </a>
              <a
                href="#"
                onClick={(e) => handleScroll(e, "skills")}
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">기술 스택</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* =========== 큰 사진 =========== */}
          <div
            className="hidden md:block self-center hs-tooltip [--placement:top] hs-tooltip-toggle"
            data-aos="fade-left"
          >
            <img
              src={user_info.profile.photo}
              alt="사진"
              className="rounded-[10%] hover:animate-shake origin-bottom"
            />
            {photoTooltip}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
