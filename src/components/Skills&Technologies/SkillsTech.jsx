import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

import {
  LuLaptop,
  LuPenTool,
  LuLink,
  LuGauge,
  LuCloudUpload,
} from "react-icons/lu";

const skills = [
  {
    icon: LuLaptop,
    title: "Frontend Development",
    description: "Build responsive, modern and accessible web applications.",
  },
  {
    icon: LuPenTool,
    title: "UI / UX Design",
    description: "Create clean, intuitive and engaging user interfaces.",
  },
  {
    icon: LuLink,
    title: "API Integration",
    description: "Connect apps with REST API's and handle data efficiently.",
  },
  {
    icon: LuGauge,
    title: "Performance Optimization",
    description:
      "Optimize performance for better speed, SEO and user experience.",
  },
  {
    icon: LuCloudUpload,
    title: "Deployment",
    description:
      "Deploy and manage applications using modern tools and workflows.",
  },
];

const SkillsTech = () => {
  return (
    <div id="skills" className="max-w-11/12 mx-auto py-15 px-2  ">
      <div className="pb-5">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center uppercase">
          skills & technologies
        </h1>
        <div className="h-1.5 max-w-30 mx-auto my-5 bg-linear-to-r from-[#C27AFF] via-[#E072DD] to-[#FB64B7]"></div>
        <p className="font-medium text-xl text-center text-white/80 capitalize">
          Here are the technologies and tools i use to bring ideas to life
        </p>
      </div>

      <div className="mt-10 flex justify-around flex-col md:flex-row max-w-220 mx-auto gap-7 md:gap-10 ">
        <div className=" h-110 my-auto p-7  bg-[#111111] rounded-xl border-2 border-white/5 ">
          <div className="">
            <h3 className="font-bold text-xl capitalize mb-5">
              technologies i use
            </h3>
            <div className="grid grid-cols-3">
              <div className="border border-white/30 p-5 flex flex-col justify-center items-center rounded-tl-lg hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiReact className="text-4xl text-[#61DAFB] mb-3" />
                <p className="capitalize text-gray-400 font-medium">React</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiNextdotjs className="text-4xl text-white mb-3" />
                <p className="capitalize text-gray-400 font-medium">Next.js</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center rounded-tr-lg hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiExpress className="text-4xl text-[#6D6D6D] mb-3" />
                <p className="capitalize text-gray-400 font-medium">
                  Express.js
                </p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiJavascript className="text-4xl text-[#F7DF1E] mb-3" />
                <p className="capitalize text-gray-400 font-medium">
                  JavaScript
                </p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiHtml5 className="text-4xl text-[#E34F26] mb-3" />
                <p className="uppercase text-gray-400 font-medium">Html</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiNodedotjs className="text-4xl text-[#5FA54D] mb-3" />
                <p className="capitalize text-gray-400 font-medium">Node.js</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center rounded-bl-lg hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiMongodb className="text-4xl text-[#47A248] mb-3" />
                <p className="capitalize text-gray-400 font-medium">MongoDB</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiGithub className="text-4xl text-white mb-3" />
                <p className="capitalize text-gray-400 font-medium">GitHub</p>
              </div>

              <div className="border border-white/30 p-5 flex flex-col justify-center items-center rounded-br-lg hover:bg-[#1A1A1A] transition-colors duration-200">
                <SiTailwindcss className="text-4xl text-[#06B6D4] mb-3" />
                <p className="capitalize text-gray-400 font-medium">
                  TailwindCss
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-11/12 md:max-w-80 lg:max-w-100  mx-auto">
          <div className="">
            {skills.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex gap-5 mb-8">
                  <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-emerald-500/30  shadow-[0_0_30px_rgba(16,185,129,0.3)] relative">
                      <div className="absolute inset-0 bg-emerald-800 blur-md rounded-full opacity-40 z-10"></div>

                      <Icon
                        size={24}
                        className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] z-20"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl md:text-xl mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-light text-xl md:text-md text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTech;
