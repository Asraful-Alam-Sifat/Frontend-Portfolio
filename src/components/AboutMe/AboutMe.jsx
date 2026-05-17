import Image from "next/image";
import BannerBlob from "@/assets/BannerBlob.svg";
import BannerImg from "@/assets/BannerImage.png";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";


const AboutMe = () => {
  return (
    <div
      id="About"
      className="max-w-11/12 mx-auto py-15 grid grid-cols-1 md:grid-cols-2 lg:gap-5"
    >
      <div className="relative w-full lg:w-140 xl:w-full  h-140 sm:h-100 md:h-120 xl:h-140 overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 z-10 h-full w-full blur-[1px] 
        bg-[linear-gradient(to_right,#5bba6f_2px,transparent_1px),linear-gradient(to_bottom,#5bba6f_2px,transparent_1px)] 
        bg-size-[70px_70px] opacity-5"
        ></div>

        <div className="relative w-full xl:mt-25 h-100 sm:h-100  opacity-85  ">
          <div className="relative w-full mt-15 mx-auto sm:mt-0 md:mt-10 h-100 sm:h-100 opacity-85">
            <div className="absolute inset-0 z-0  flex justify-center items-center animate-[blob_7s_infinite] filter blur-2xl opacity-80 transition-all duration-500 hover:scale-105 hover:rotate-6 pl-15 sm:pl-0">
              <Image
                src={BannerBlob}
                alt="Banner Blob"
                className="w-96 scale-140 sm:scale-110 h-auto md:scale-105 xl:scale-145"
              />
            </div>

            <div className="absolute inset-0 z-10 -top-8 -right-5 flex justify-center items-center sm:right-5 xl:-top-15 xl:right-12">
              <Image
                src={BannerImg}
                alt="Banner Image"
                className="w-95 h-auto object-contain opacity-85 rounded mask-[linear-gradient(to_bottom,black_60%,transparent_95%)] sm:scale-85 xl:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold  capitalize text-4xl lg:text-5xl">
          i build things <br /> for the web
        </h1>

        <div>
          <p className="font-medium text-lg text-white/75 capitalize mt-7 md:text-base xl:text-lg leading-6.5 xl:leading-7 mb-4 text-start">
            I’m a frontend developer based in chittagong,bangladesh. passionate
            about bridging the gap between clean code and beautiful design to
            create web experiences that are fluid, responsive, and genuinely
            enjoyable to use.
          </p>
          <p className="font-medium text-lg text-white/75 capitalize mt-7 md:text-base leading-6.5 xl:leading-7 mb-4 text-start xl:text-lg">
            started coding about 1 year ago and have since focused on bringing
            interfaces to life from scratch—building everything from interactive
            web games with precise user logic to highly dynamic,
            component-driven layouts for modern web applications. I care deeply
            about semantic structure, performance optimization, and the subtle
            details that turn a static layout into a polished digital
            experience.{" "}
          </p>
          <p className="font-medium text-lg text-white/75 capitalize mt-7 md:text-base leading-6.5 xl:leading-7 mb-4 text-start xl:text-lg">
            Outside the editor, you’ll find me exploring modern design trends,
            brainstorming digital solutions for small businesses, orunwinding
            over a quiet cup of tea.
          </p>
        </div>

        <div className="flex justify-between flex-wrap max-w-150 my-6">
          <div className="flex  justify-start items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <p className="font-light text-base text-white/60 capitalize">
              clean code
            </p>
          </div>
          <div className="flex  justify-start items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <p className="font-light text-base text-white/60 capitalize">
              Fast interfaces
            </p>
          </div>
          <div className="flex  justify-start items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <p className="font-light text-base text-white/60 capitalize">
              Accessibility
            </p>
          </div>
          <div className="flex  justify-start items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <p className="font-light text-base text-white/60 capitalize">
              Attention to detail
            </p>
          </div>
        </div>

        <Link
          href={"/resume/Asraful_Alam_Sifat_Frontend_Developer.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-emerald-600  btn w-fit text-xl capitalize p-6 "
        >
          <div className="flex justify-between gap-2 items-center ">
            download CV <ArrowRightIcon className=" " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
