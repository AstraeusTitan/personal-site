import { FC, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

type TLink = {
  name: string;
  href: string;
};

const Navbar: FC<{links: TLink[]}> = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 relative">
      <div
        className="
        mx-auto
        max-w-7xl
        px-2
        sm:px-6
        lg:px-8
        bg-white
        shadow"
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-center items-center sm:justify-start">
            <div className="w-16">
              <Logo />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    text-sky-400
                    hover:bg-sky-400
                    hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div
            className="
            absolute
            right-0
            sm:hidden"
          >
            <button
              className="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-sky-400
              hover:bg-sky-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-white"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-white absolute top-0 right-0 h-screen -z-10 px-8 shadow">
          <div className="flex flex-col items-stretch space-y-2 pt-24">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="
                    px-4
                    py-2
                    rounded-md
                    text-sm
                    text-center
                    font-medium
                    text-sky-400
                    hover:bg-sky-400
                    hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
