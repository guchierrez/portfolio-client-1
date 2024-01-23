import { ReactNode, useContext } from "react";
import { MainContext } from "../provider/MainContext";
import { Link } from "react-router-dom";

interface INavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbarProps) => {
  const { NavbarDrawerRef, NavbarElementRef } = useContext(MainContext);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        ref={NavbarDrawerRef}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-base-200">
          <div
            className="w-5/6 md:w-2/3 mx-auto flex items-center justify-between"
            ref={NavbarElementRef}
          >
            <Link to="/">
              <h1 className="font-marketDeco text-3xl tracking-widest">
                PORTFOLIO
              </h1>
            </Link>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-moonLight tracking-wide">
                {/* Navbar menu content here */}
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/projects">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu font-moonLight tracking-wide p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to="/projects">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link to="/projects">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
