function Career({ items }) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div className="ps-2 my-2 first:mt-0 !mt-2">
              {/* =========== 기간 =========== */}
              <h3 className="text-sm font-medium uppercase text-zinc-500 dark:text-zinc-400">
                {item.period}
              </h3>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg">
              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                  {/* =========== 로고 =========== */}
                  {item.logo && (
                    <img
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 dark:border-none"
                      src={item.logo}
                      alt="로고"
                    />
                  )}

                  {/* =========== 회사명 =========== */}
                  <div className="leading-6">
                    {item.title}
                    <p className="font-normal text-sm text-zinc-600 dark:text-zinc-300">
                      {item.subtitle}
                    </p>
                  </div>
                </h3>

                {/* =========== 담당 업무 =========== */}
                {item.descriptions && (
                  <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-3">
                    {item.descriptions.map((description, index) => {
                      return (
                        <li className="flex items-center space-x-2 mt-1" key={index}>
                          <svg
                            className="flex-shrink-0 size-4 text-red-800 dark:text-red-500"
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
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-base text-zinc-500 dark:text-zinc-400">
                            {description}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Career;
