import { ArrowUpRightFromSquare, LogoGithub } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import githubIssueTrackerCover from "@/assets/projectsCover/githubIssueTracker.png";
import digiToolsCover from "@/assets/projectsCover/digitools.png";
import jobApplicationsTracker from "@/assets/projectsCover/job-applications-tracker.png";
import teckWaveCover from "@/assets/projectsCover/teckWave.png";

const OtherProjects = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="font-bold text-4xl text-center capitalize">
        other projects
      </h1>

      <div className="grid grid-cols-1 gap-8 md:gap-3 my-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="border-2 border-white/10 hover:border-emerald-600 hover:p-2 transition-all duration-200 rounded-lg bg-[#0B111C] hover:border-3 min-w-75">
          <div className="relative group">
            <Image
              src={githubIssueTrackerCover}
              alt="GitHub Issues Tracker cover"
              className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={
                    "https://github.com/Asraful-Alam-Sifat/GitHub-Issue-Tracker"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                >
                  <LogoGithub />
                </Link>
                <Link
                  href={"https://githb-issue-tracker.netlify.app"}
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
              GitHub Issues Tracker
            </h3>
            <p className="font-light text-base capitalize md:text-sm lg:text-base">
              A clean and responsive GitHub-style issue tracking web application
              built to manage and organize project issues efficiently. Users can
              view issues, filter them by status, search through issues, and
              manage project-related tasks through an intuitive interface.
            </p>
            <div className="my-5 flex gap-4 flex-wrap">
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                html
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                Tailwind CSS
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                javaScript
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 border-white/10 hover:border-emerald-600 hover:p-2 transition-all duration-200 rounded-lg bg-[#0B111C] hover:border-3 min-w-75">
          <div className="relative group">
            <Image
              src={teckWaveCover}
              alt="Tech Wave cover"
              className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={"https://github.com/Asraful-Alam-Sifat/tech-wave"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                >
                  <LogoGithub />
                </Link>
                <Link
                  href={"https://asraful-alam-sifat.github.io/tech-wave"}
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
              TechWave - Podcast Landing Page (UI)
            </h3>
            <p className="font-light text-base capitalize md:text-sm lg:text-base">
              TechWave is a modern, sleek, and responsive landing page design
              for a tech-focused podcast. It features sections highlighting
              podcast stats, key benefits, featured episodes, and host profiles
              with a beautiful, dark-themed futuristic aesthetic.
            </p>
            <div className="my-5 flex gap-4 flex-wrap">
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                html
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                CSS
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 border-white/10 hover:border-emerald-600 hover:p-2 transition-all duration-200 rounded-lg bg-[#0B111C] hover:border-3 min-w-75">
          <div className="relative group">
            <Image
              src={digiToolsCover}
              alt="digi Tools cover"
              className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={
                    "https://github.com/Asraful-Alam-Sifat/digitools-platform"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                >
                  <LogoGithub />
                </Link>
                <Link
                  href={"https://digitools-platform.netlify.app"}
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
              digitools-platform
            </h3>
            <p className="font-light text-base capitalize md:text-sm lg:text-base">
              DigiTools is a web app that is easy to use, looks great on any
              device, and gives you quick feedback when you interact with it.
            </p>
            <div className="my-5 flex gap-4 flex-wrap">
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                javaScript
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

        <div className="border-2 border-white/10 hover:border-emerald-600 hover:p-2 transition-all duration-200 rounded-lg bg-[#0B111C] hover:border-3 min-w-75">
          <div className="relative group">
            <Image
              src={jobApplicationsTracker}
              alt="job applications tracker cover"
              className="w-full h-72 object-cover rounded-t-lg group-hover:rounded-lg transition-all duration-150"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-5 z-10 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={
                    "https://github.com/Asraful-Alam-Sifat/job-applications-tracker"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/20 backdrop-blur-sm p-2 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
                >
                  <LogoGithub />
                </Link>
                <Link
                  href={
                    "https://asraful-alam-sifat.github.io/job-applications-tracker"
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
              Job Application Tracker
            </h3>
            <p className="font-light text-base capitalize md:text-sm lg:text-base">
              A clean, responsive, and intuitive web application designed to
              help job seekers organize and track their job applications. Users
              can view available positions, manage statuses (Interviewing,
              Rejected, or Not Applied), track metrics via a dynamic dashboard,
              and delete postings.
            </p>
            <div className="my-5 flex gap-4 flex-wrap">
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                html
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                javaScript
              </span>
              <span className="border-2 border-olive-900 px-3 rounded-full p-2 text-md capitalize bg-emerald-300 text-emerald-900 font-bold opacity-75 md:text-sm md:p-1.5 flex items-center text-center lg:text-lg lg:p-2 lg:px-3 ">
                tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
