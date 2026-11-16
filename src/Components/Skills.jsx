import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
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
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", Icon: TbApi, color: "#C084FC" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", Icon: VscVscode, color: "#3B9AE1" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

function SkillCard({ name, Icon, color }) {
  return (
    <li className="group flex flex-col items-center gap-3 rounded-xl border border-purple-500/20 bg-white/5 px-4 py-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-600/20">
      <Icon
        aria-hidden="true"
        className="text-4xl transition duration-300 group-hover:scale-110"
        style={{ color }}
      />
      <span className="text-sm font-medium text-gray-200">{name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-[#100B20] py-20 px-6 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-purple-700/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Technical{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="space-y-10">
          {GROUPS.map((group, i) => (
            <div
              key={group.label}
            >
              <h3 className="mb-4 text-lg font-semibold text-purple-300">
                {group.label}
              </h3>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <SkillCard key={item.name} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}