import Image from "next/image";
import Link from "next/link";
import bookLoversImg from "@/assets/projectsCover/book-lovers.png";
import keenkeeperImg from "@/assets/projectsCover/keenkeeper.png";
import { LogoGithub } from "@gravity-ui/icons";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

const FeaturedProjects = () => {
  return (
    <div className="mx-auto">
      <div>
        <div className="mb-15">
          <h1 className="font-bold text-5xl md:text-6xl uppercase text-center">
            featured projects
          </h1>
          <div className="mx-auto my-5 h-1.5 w-30 bg-linear-to-r from-emerald-700 via-cyan-300 to-blue-400"></div>
          <p className="font-medium text-xl capitalize text-center text-white/80">
            a selection of real work — each one a problem solved, not just a
            design exercise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4 w-11/12 mx-auto">
          <div className="border-2 border-white/10 hover:border-emerald-600 hover:border-3 hover:p-2 transition-all duration-200 rounded-lg bg-[#080C14] min-w-75">
            <div className="relative group">
              <Image
                src={bookLoversImg}
                alt="Book Lovers Cover"
                className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={"https://github.com/Asraful-Alam-Sifat/Book-Lovers"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                  >
                    <LogoGithub />
                  </Link>
                  <Link
                    href={"https://book-lovers-tan.vercel.app"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRightFromSquare />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-2xl capitalize mt-5 mb-3 md:text-xl lg:text-3xl">
                book lovers — Online Book Borrowing Platform{" "}
              </h3>
              <p className="font-light text-base capitalize text-start md:text-sm lg:text-base lg:font-normal opacity-75">
                A seamless and modern web application designed to digitize the
                traditional library experience. Users can explore a vast
                collection of books, filter by categories, and borrow titles
                digitally. The platform prioritizes security and performance
                using BetterAuth, Next.js, and MongoDB.
              </p>
              <div className="my-5 flex flex-wrap gap-4">
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3">
                  Next.JS
                </span>
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3">
                  BetterAuth
                </span>
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3">
                  MongoDB
                </span>
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3">
                  tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="border-2 border-white/10 hover:border-emerald-600 hover:p-2 transition-all duration-200 rounded-lg bg-[#080C14] hover:border-3 min-w-75">
            <div className="relative group">
              <Image
                src={keenkeeperImg}
                alt="Keen keeper cover"
                className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={
                      "https://github.com/Asraful-Alam-Sifat/KeenKeeper-Keep-Your-Friendships-Alive"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                  >
                    <LogoGithub />
                  </Link>
                  <Link
                    href={
                      "https://keen-keeper-keep-your-friendships-a.vercel.app"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRightFromSquare />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-2xl capitalize mt-5 mb-3 md:text-xl lg:text-3xl">
                KeenKeeper—Keep Your Friendships Alive
              </h3>
              <p className="font-light text-base capitalize md:text-sm lg:text-base">
                KeenKeeper is a friendship management app designed to help you
                stay connected with the people who matter most. It gives you a
                simple way to track interactions, manage friend details, and
                view friendship activity in one clean dashboard.
              </p>
              <div className="my-5 flex gap-4 flex-wrap">
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                  next.JS
                </span>
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                  react
                </span>
                <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                  tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
