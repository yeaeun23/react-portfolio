import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Profile() {
  return (
    <section id="profile" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Daniel Shan Balico Graduation Picture"
          />
        </div>

        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.subtitle}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.title}</h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <p className="mt-6 dark:text-zinc-300 text-sm font-light lg:w-[87%] leading-7 text-zinc-500 whitespace-pre-line">
              {user_info.main.birth}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                프로젝트
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">연락처</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Daniel Shan Balico Graduation Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
