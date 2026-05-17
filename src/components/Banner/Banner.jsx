import Image from "next/image";
import BannerImg from "@/assets/BannerImage.png";
import BannerBlob from "@/assets/BannerBlob.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  // Available Status
  const isAvailable = true;

  return (
    <div id="home" className="md:py-20 xl:py-0">
      <div className="relative w-full h-content overflow-hidden  ">
        <div
          className="absolute inset-0 z-10 h-full w-full blur-[1px] 
        bg-[linear-gradient(to_right,#5bba6f_2px,transparent_1px),linear-gradient(to_bottom,#5bba6f_2px,transparent_1px)] 
        bg-size-[70px_70px] opacity-10"
        ></div>

        <div className="relative z-100 flex flex-col-reverse sm:flex-row justify-between container mx-auto overflow-hidden w-full min-h-screen items-center ">
          <div className="relative z-20 px-5 md:px-10 sm:pt-18 py-10 ">
            <div className="text-white xl:pt-20 xl:pl-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 mb-6">
                {/* The Status Dot */}
                <span className={`relative flex h-2 w-2`}>
                  {isAvailable && (
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isAvailable ? "bg-emerald-400" : "bg-red-500"} opacity-95`}
                    ></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? "bg-emerald-500" : "bg-red-600"}`}
                  ></span>
                </span>

                {isAvailable ? (
                  <span className="text-[13px] font-mono text-emerald-400 uppercase tracking-widest">
                    {" "}
                    Available for work
                  </span>
                ) : (
                  <span className="text-[13px] font-mono text-red-400 uppercase tracking-widest">
                    {" "}
                    Booked
                  </span>
                )}
              </div>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold capitalize text-white opacity-100 ">
                  frontend <br />{" "}
                  <span className="text-emerald-500">developer</span>
                </h1>
                <p className="text-sm md:text-lg font-medium capitalize opacity-80 ">
                  building fast, clean, and scalable web experiences
                </p>
              </div>

              <div className="mt-8">
                <p className="font-medium text-sm md:text-base max-w-150 capitalize text-white/60">
                  i craft pixel-perfect interfaces with modern tools — turning
                  ideas into products that people actually enjoy using.
                </p>

                <div className="flex justify-between gap-1 max-w-95 my-9">
                  <Link
                    href={"#projects"}
                    className="bg-emerald-500 flex gap-1 justify-center items-center p-3 rounded-sm hover:bg-transparent hover:border-2 hover:border-emerald-500 group transition-all duration-100"
                  >
                    <p className="font-bold text-xl sm:text-sm md:text-xl text-[#40513B] capitalize group-hover:text-white ">
                      View my work
                    </p>
                    <ArrowRight className="text-[#40513B] font-extrabold text-xl sm:w-5 group-hover:text-white" />
                  </Link>
                  <Link
                    href={""}
                    className="border-2 border-emerald-500 items-center flex px-4 rounded-sm capitalize hover:bg-emerald-500 hover:text-[#40513B] hover:py-3 hover:px-4.5 transition-all duration-200  "
                  >
                    <p className="font-bold text-xl sm:text-sm md:text-xl">
                      get in touch
                    </p>
                  </Link>
                </div>
              </div>
              <hr className="text-white/10 border my-5 sm:my-10" />
              <div className="flex justify-around gap-2">
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="font-bold text-2xl flex items-center">
                    350
                    <span className="text-emerald-500 font-extrabold text-xl ">
                      +
                    </span>
                  </p>
                  <p className="font-normal text-xs sm:text-sm capitalize text-white/60 text-center">
                    contributions on Github
                  </p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="font-bold text-2xl flex items-center">
                    10
                    <span className="text-emerald-500 font-extrabold text-xl ">
                      +
                    </span>
                  </p>
                  <p className="font-normal text-xs sm:text-sm  capitalize text-white/60 text-center">
                    frontend projects built
                  </p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="font-bold text-2xl flex items-center">
                    100
                    <span className="text-emerald-500 font-extrabold text-xl ">
                      %
                    </span>
                  </p>
                  <p className="font-normal text-xs sm:text-sm  capitalize text-white/60 text-center">
                    conmmited to clean code
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-140 h-150 sm:h-100 opacity-85 ">
            <div className="absolute inset-1 z-0 flex justify-center items-center animate-[blob_7s_infinite] filter blur-2xl opacity-80 transition-all duration-500 hover:scale-103 hover:rotate-6 pl-15 sm:pl-0">
              <Image
                src={BannerBlob}
                alt="banner Blob"
                className="w-110 h-auto sm:w-120 md:w-162.5 "
              />
            </div>

            <div className="absolute top-25 right-25 z-10 mask-[linear-gradient(to_bottom,black_70%,transparent_100%)] sm:top-20 sm:right-15 md:top-12 md:right-12 lg:top-5 lg:right-20 xl:top-17 xl:right-28">
              <Image
                src={BannerImg}
                alt="Banner Image"
                className="w-85 opacity-85 h-auto object-contain rounded sm:w-50 md:w-65 lg:w-85 xl:w-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
