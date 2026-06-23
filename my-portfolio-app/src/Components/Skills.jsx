import React from "react";

const Skills = () => {
  const frontend = [
    { id: 1, icon: "ti-brand-html5", title: "HTML", cat: "Markup", color: "#fff3e0", iconColor: "#e65100" },
    { id: 2, icon: "ti-brand-css3", title: "CSS", cat: "Styling", color: "#e3f2fd", iconColor: "#1565c0" },
    { id: 3, icon: "ti-brand-javascript", title: "JavaScript", cat: "Language", color: "#fffde7", iconColor: "#f57f17" },
    { id: 4, icon: "ti-brand-typescript", title: "TypeScript", cat: "Language", color: "#e8eaf6", iconColor: "#283593" },
    { id: 5, icon: "ti-brand-react", title: "React", cat: "Framework", color: "#e0f7fa", iconColor: "#00695c" },
    { id: 6, icon: "ti-brand-tailwind", title: "Tailwind", cat: "CSS Framework", color: "#e1f5fe", iconColor: "#01579b" },
    { id: 7, icon: "ti-brand-nextjs", title: "Next.js", cat: "Framework", color: "#eceff1", iconColor: "#37474f" },
  ];

  const backend = [
    { id: 8, icon: "ti-brand-nodejs", title: "Node.js", cat: "Runtime", color: "#f1f8e9", iconColor: "#33691e" },
    { id: 9, icon: "ti-server-2", title: "Express.js", cat: "Framework", color: "#fafafa", iconColor: "#212121" },
    { id: 10, icon: "ti-database", title: "MongoDB", cat: "Database", color: "#e8f5e9", iconColor: "#1b5e20" },
  ];

  const tools = [
    { id: 11, icon: "ti-brand-github", title: "GitHub", cat: "Version Control", color: "#eceff1", iconColor: "#263238" },
    { id: 12, icon: "ti-brand-vercel", title: "Vercel", cat: "Deployment", color: "#f5f5f5", iconColor: "#111111" },
    { id: 13, icon: "ti-cloud-upload", title: "Netlify", cat: "Deployment", color: "#e0f2f1", iconColor: "#004d40" },
  ];

  const SkillCard = ({ icon, title, cat, color, iconColor }) => (
    <div className="flex items-center gap-3 bg-gray-800/60 border border-gray-700/50 rounded-xl p-3 hover:border-cyan-500/40 hover:bg-gray-800 transition duration-300">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl"
        style={{ backgroundColor: color + "22", color: iconColor }}
      >
        <i className={`ti ${icon}`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{cat}</p>
      </div>
    </div>
  );

  const Section = ({ label, items }) => (
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((tech) => (
          <SkillCard key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="scroll-mt-24 w-full min-h-screen bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-5 py-20">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-1">What I work with</p>
          <h2 className="text-4xl font-bold text-white">Skills &amp; Technologies</h2>
          <div className="w-10 h-1 bg-cyan-400 rounded mt-3 mb-3" />
          <p className="text-gray-400 text-sm">Tools and technologies I build with daily</p>
        </div>

        {/* Groups */}
        <Section label="Frontend" items={frontend} />
        <Section label="Backend & Database" items={backend} />
        <Section label="Tools & Deployment" items={tools} />

        {/* Footer line */}
        <div className="border-t border-gray-800 pt-5 mt-2 text-center">
          <p className="text-xs text-gray-600">13 technologies · Full-stack capable</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;