import Career from "../Career.jsx";
import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

function Careers() {
  return (
    <section id="careers" className="mx-4 lg:mx-20 flex flex-col md:flex-row gap-6 md:gap-2">
      {/* =========== 왼쪽 영역 =========== */}
      <div className="w-full md:w-[80%]" data-aos="fade-up">
        {/* =========== 학력 =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaLandmark className="text-xl text-red-800 dark:text-red-500" />
          학력
        </h4>
        <Career items={user_info.schools} />

        {/* =========== 교육 =========== */}
        <h4 className="text-xl dark:text-white mt-6 mb-4 font-bold flex gap-2 items-center">
          <PiCertificateFill className="text-2xl text-red-800 dark:text-red-500" />
          교육
        </h4>
        <Career items={user_info.educations} />

        {/* =========== 자격증 =========== */}
        <h4 className="text-xl dark:text-white mt-6 mb-4 font-bold flex gap-2 items-center">
          <PiCertificateFill className="text-2xl text-red-800 dark:text-red-500" />
          자격증
        </h4>
        <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className="relative">
          <div className="hs-carousel relative overflow-hidden w-full h-44 bg-white dark:bg-gray-800 rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {user_info.certificates.map((cert, index) => {
                return (
                  <div className="hs-carousel-slide relative" key={index}>
                    <div className="flex justify-center items-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                      <div className="hs-tooltip [--placement:bottom] inline-block">
                        <div className="hs-tooltip-toggle text-center text-gray-800 dark:text-white hover:text-red-800 hover:dark:text-red-500">
                          <p className="transition duration-700 px-6 font-bold">{cert.title}</p>
                          <p className="transition duration-700 px-6 text-sm">{cert.institution}</p>
                          <p className="transition duration-700 px-6 text-sm mt-3 text-zinc-500">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* =========== 자격증 - 이전 버튼 =========== */}
          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          {/* =========== 자격증 - 다음 버튼 =========== */}
          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
          {/* =========== 자격증 - 페이지 =========== */}
          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            {user_info.certificates.map((cert, index) => {
              return (
                <span
                  className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-red-500 dark:hs-carousel-active:border-red-500"
                  key={index}
                ></span>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========== 오른쪽 영역 =========== */}
      <div className="w-full" data-aos="fade-up" data-aos-delay="100">
        {/* =========== 경력 =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaBuildingUser className="text-2xl text-red-800 dark:text-red-500" />
          경력 (총 6년 10개월)
        </h4>
        <Career items={user_info.company} />

        {/* =========== 포상 =========== */}
        <h4 className="text-xl dark:text-white mt-6 mb-4 font-bold flex gap-2 items-center">
          <FaAward className="text-2xl text-red-800 dark:text-red-500" />
          포상
        </h4>
        <Career items={user_info.awards} />
      </div>
    </section>
  );
}

export default Careers;
