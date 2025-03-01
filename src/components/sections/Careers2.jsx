import Career from "../Career.jsx";
import user_info from "../../data/user_info.js";
import { FaAward } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

function Careers2() {
  return (
    <section id="careers" className="mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2">
      <div className="w-full md:w-[80%]">
        {/* =========== 교육 =========== */}
        <h4 className="text-xl dark:text-white mt-6 font-bold flex gap-2 items-center">
          <PiCertificateFill className="text-2xl text-red-800 dark:text-red-500" />
          교육
        </h4>
        <Career items={user_info.educations} />
      </div>

      <div className="w-full">
        {/* =========== 수상 =========== */}
        <h4 className="text-xl dark:text-white mt-6 font-bold flex gap-2 items-center">
          <FaAward className="text-2xl text-red-800 dark:text-red-500" />
          수상
        </h4>
        <Career items={user_info.awards} />
      </div>
    </section>
  );
}

export default Careers2;
