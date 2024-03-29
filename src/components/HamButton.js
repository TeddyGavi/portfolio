export default function HamButton({ handleSlide, navSlide }) {
  return (
    <button
      className="relative group z-10 mr-2 focus-visible:s"
      aria-label={navSlide ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={navSlide}
      onClick={() => {
        handleSlide();
      }}
    >
      <div
        aria-label="open hamburger menu"
        className={`md:hidden w-8 h-8 flex items-center space-y-2 relative flex-col border border-darkbg dark:border-white p-1 rounded transform transition-all duration-300  ${
          navSlide
            ? "ring-0 hover:ring-4 ring-stone-100 ring-opacity-40"
            : "hover:ring-4 ring-0 ring-opacity-30 ring-stone-900"
        }`}
      >
        {navSlide ? (
          <div className="flex flex-col items-center  mt-3 rotate-180 transform transition-all duration-500 ">
            <div className="w-7 h-0.5 absolute dark:bg-stone-200 bg-darkbg -rotate-45  transform transition-all duration-300 origin-center "></div>
            <div className="w-7 h-0.5  absolute dark:bg-stone-200 bg-darkbg rotate-45 transform transition-all duration-300 origin-center "></div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="w-6 h-0.5 dark:bg-stone-200 bg-darkbg"></div>
              <div className="w-6 h-0.5 dark:bg-stone-200 bg-darkbg"></div>
              <div className="w-6 h-0.5 dark:bg-stone-200 bg-darkbg"></div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

// translate-y-[10px] -translate-x-[14px]
// ring-0 hover:ring-4 ring-stone-100 ring-opacity-40
// transform transition-all duration-300 origin-center
