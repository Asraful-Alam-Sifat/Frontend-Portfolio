import Image from "next/image";
import Link from "next/link";
import Navlogo from "@/assets/SignatureLogo.png";

const NavBar = () => {
  return (
    <div className="navbar  shadow-sm   px-10 fixed top-0 left-0 w-full bg-[#080808]! opacity-100! z-9999 border-b-2 border-white/10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl space-y-2"
          >
            <Link href={"#projects"}>
              <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
                Projects
              </li>
            </Link>
            <Link href={""}>
              <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
                Skills
              </li>
            </Link>
            <Link href={""}>
              {" "}
              <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
                About
              </li>
            </Link>
            <Link href={""}>
              <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <Link href={"#home"} className="relative  z-50">
          <Image
            style={{
              height: "38px",
              width: "auto",
              maxWidth: "100%",
              display: "block",
            }}
            src={Navlogo}
            alt="NavLogo"
            className="w-60 "
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-10 px-1 text-xl ">
          <Link href={"#projects"}>
            <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
              Projects
            </li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
              Skills
            </li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
              About
            </li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="text-gray-200 opacity-45 hover:text-white hover:opacity-95 transition-all duration-150">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end ">
        <div
          className="p-0.5 rounded-md transition-all duration-300 hover:animate-border-slow"
          style={{
            background: `conic-gradient(from var(--angle), #10b981, #059669, #10b981)`,
            "--angle": "0deg",
          }}
        >
          <Link
            href={""}
            className="btn items-center gap-2 sm:px-6 py-2 bg-black rounded-md text-white w-full h-full sm:text-lg hover:bg-emerald-600 transition-all duration-200 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              height={24}
              width={24}
            >
              <path
                fill="#ffffff"
                d="M7.89441 17H1.4198l0.39941 -2h6.50391zm8.25289 -4.2422c0.3287 0.283 0.8025 0.3214 1.1729 0.0957L23.6395 9l-1.4394 7.2002c-0.1001 0.4999 -0.5001 0.7998 -1 0.7998h-10c-0.6 -0.0001 -1.1 -0.6002 -1 -1.2002l1.3926 -6.96777zM8.75183 13h-4.5498l0.40527 -2h4.57227zM22.7997 7c0.0785 0 0.1555 0.01108 0.2295 0.03027l-6.128 3.73633 -4.3388 -3.74023c0.0759 -0.01583 0.155 -0.02634 0.2373 -0.02637zM9.60828 9H7.02039l0.39941 -2h2.6172z"
                strokeWidth={1}
              />
            </svg>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
