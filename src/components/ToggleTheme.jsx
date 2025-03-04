import { CgDarkMode } from "react-icons/cg";

function ToggleTheme({ switchTheme }) {
  return (
    <div className="relative">
      <div className="hs-tooltip [--placement:bottom] inline-block">
        {/* =========== 테마 버튼 =========== */}
        <button
          onClick={switchTheme}
          className="hs-tooltip-toggle text-2xl text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5"
          aria-label="Dark Mode Button"
        >
          <CgDarkMode />

          {/* =========== 테마 버튼 - 툴팁 =========== */}
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            다크 모드
          </span>
        </button>
      </div>
    </div>
  );
}

export default ToggleTheme;
