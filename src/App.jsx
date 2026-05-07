import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { profile, projects, skillGroups } from "./data/portfolio";

const navItems = ["Projects", "Skills", "About", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-zinc-950">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-950/10 bg-[#f7f3ea]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid size-9 place-items-center rounded-md bg-zinc-950 text-sm text-white">
            {profile.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span>{profile.role}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          className="hidden rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-md border border-zinc-950/15 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-zinc-950/10 px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 font-medium text-zinc-800 hover:bg-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-zinc-950/15 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-700">
            <MapPin size={16} />
            {profile.location}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-zinc-800 sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-950/15 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:border-zinc-950/30"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px]">
          <div className="absolute inset-x-4 top-4 h-72 rounded-md bg-zinc-950 shadow-2xl shadow-zinc-950/20 sm:inset-x-10" />
          <div className="relative mx-auto max-w-md rounded-md border border-zinc-950/15 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-950/10 pb-3">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-semibold text-zinc-500">
                portfolio.jsx
              </span>
            </div>
            <div className="space-y-4 py-5 font-mono text-sm leading-6">
              <p>
                <span className="text-rose-600">const</span>{" "}
                <span className="text-blue-700">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                focus: <span className="text-emerald-700">"frontend"</span>,
              </p>
              <p className="pl-5">
                tools: <span className="text-emerald-700">["React", "Git"]</span>,
              </p>
              <p className="pl-5">
                goal: <span className="text-emerald-700">"ship useful apps"</span>,
              </p>
              <p>{"}"}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Clean UI", "Readable Code", "Fast Learner"].map((label) => (
                <div
                  key={label}
                  className="rounded-md border border-zinc-950/10 bg-[#f7f3ea] p-3 text-center text-sm font-semibold"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-56 rounded-md border border-zinc-950/10 bg-[#e9f7ef] p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-md bg-emerald-600 text-white">
                <Sparkles size={20} />
              </span>
              <div>
                <p className="text-sm font-bold">Ready to grow</p>
                <p className="text-xs text-zinc-600">Learning, building, iterating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects that show how I think and build"
          description="Replace these placeholders with your best projects. Focus on what problem each project solves and what technical decisions you made."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[520px] flex-col rounded-md border border-zinc-950/10 bg-[#f7f3ea] p-5"
            >
              <div
                className={`mb-5 h-36 rounded-md bg-gradient-to-br ${project.accent} p-4 text-white`}
              >
                <div className="flex h-full flex-col justify-between">
                  <Code2 size={28} />
                  <p className="text-xl font-black">{project.title}</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-zinc-700">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-950/10 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-950" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={project.liveUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Live
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.codeUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-zinc-950/15 bg-white px-4 py-2.5 text-sm font-semibold"
                >
                  Code
                  <Github size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills I use to build practical web apps"
          description="Keep this section honest and specific. It is better to show working familiarity than to list every technology you have ever touched."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-md border border-zinc-950/10 bg-white p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-zinc-950 text-white">
                  <BriefcaseBusiness size={20} />
                </span>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[#f7f3ea] px-3 py-2 text-sm font-semibold text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-zinc-950 py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-start lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            About
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            I care about clear interfaces and code that is easy to improve.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            I am building my path as a junior software developer by practicing the full
            flow of real projects: planning features, breaking work into components,
            connecting data, testing behavior, and deploying usable interfaces.
          </p>
          <p>
            Right now I am focused on React, JavaScript fundamentals, Tailwind CSS, and
            strong Git habits. I am looking for a team where I can contribute, ask good
            questions, and keep growing through hands-on work.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-md border border-zinc-950/10 bg-[#f7f3ea] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-700">
              Update these links with your real profiles, then use this section as the
              call-to-action for recruiters, mentors, and collaborators.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <SocialLink href={`mailto:${profile.email}`} label="Email" icon={<Mail size={18} />} />
            <SocialLink href={profile.github} label="GitHub" icon={<Github size={18} />} />
            <SocialLink
              href={profile.linkedin}
              label="LinkedIn"
              icon={<Linkedin size={18} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-zinc-700">{description}</p>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
    >
      {icon}
      {label}
    </a>
  );
}

export default App;
