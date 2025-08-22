import Link from "next/link";

const navItems = {
  "/about": {
    name: "about",
  },
  "/works": {
    name: "works",
  },
  "/cv": {
    name: "cv",
  },
  "/contact": {
    name: "contact",
  },
};
// w-[calc(100%-50px)] text-calc(1rem*1.2vw+1rem)
// calc((var(--normal-text-size-value) - 1) * 1.2vw + 1rem);
export function Navbar() {
  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row w-full justify-between items-center"
          id="nav"
        >
          <div className="m-2">
            <Link
              href="/"
              className="rounded-sm p-4 m-1 text-[calc(1*calc(.012*min(100vh,900px))+1rem)] tracking-widest"
            >
              Akane Little
            </Link>
          </div>
          <div className="flex flex-row p-4 tracking-widest">
            <button
              className="header-burger-btn burger p-5 block sm:hidden"
              data-test="header-burger"
            >
              <span className="js-header-burger-open-title sr-only">
                Open or Close Menu
              </span>
              <div className="burger-box flex flex-col justify-between">
                <div className="top-bun w-16 h-1 border-b border-black mt-1 mx-auto"></div>
                <div className="patty w-16 h-1 border-b border-black my-4 mx-auto"></div>
                <div className="bottom-bun w-16 h-1 border-b border-black mb-1 mx-auto"></div>
              </div>
            </button>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="hidden sm:flex align-middle py-1 px-2 m-1 text-base sm:text-[calc(.5*calc(.012*min(100vh,900px))+1rem)]"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
