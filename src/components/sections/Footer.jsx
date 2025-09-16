import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-4 text-center md:flex justify-between">
      {/* =========== COPYRIGHT =========== */}
      <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        © 2025 Yeeun Kang. All Rights Reserved
      </p>

      {/* =========== TOP 버튼 =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-normal flex gap-2 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" />
        맨위로
      </button>
    </footer>
  );
}

export default Footer;
