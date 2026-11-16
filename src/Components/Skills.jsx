import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaStar,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", Icon: FaReact, color: "#61DAFB" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", Icon: TbApi, color: "#C084FC" },
    ],
  },
  {
    label: "Database & Tools",
    items: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", Icon: VscVscode, color: "#3B9AE1" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-500/10 to-white/[0.03] p-8 shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)] backdrop-blur-xl md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
              <FaStar aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold md:text-3xl">Technical Skills</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {GROUPS.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-purple-500/20 bg-[#100B20]/60 p-5"
              >
                <h3 className="mb-5 text-base font-semibold text-purple-200">
                  {group.label}
                </h3>
                <ul className="grid grid-cols-3 gap-x-2 gap-y-5">
                  {group.items.map(({ name, Icon, color }) => (
                    <li key={name} className="group flex flex-col items-center gap-2 text-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl transition duration-300 group-hover:scale-110 group-hover:border-purple-400/50">
                        <Icon aria-hidden="true" style={{ color }} />
                      </span>
                      <span className="text-xs text-gray-300">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}