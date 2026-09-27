"use client";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "FastAPI",
  "MongoDB",
  "Supabase",
  "Git & GitHub",
  "AI / ML",
  "HTML & CSS",
  "Problem Solving",
];

const projects = [
  {
    number: "01",
    title: "AI Timetable Generator",
    description:
      "An intelligent timetable generation system designed to create optimized academic schedules.",
    tech: ["Next.js", "Python", "OR-Tools", "Supabase"],
    status: "Optimization system",
  },
  {
    number: "02",
    title: "Resumely",
    description:
      "A modern resume preparation platform with AI-assisted resume creation and ATS analysis.",
    tech: ["React", "FastAPI", "MongoDB", "AI"],
    status: "AI resume tooling",
  },
];

const achievementSlots = [
  "Hackathons",
  "Certifications",
  "Internships",
  "Awards",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111]">

{/* NAVBAR */}
<header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
  <nav className="rounded-full border border-black/10 bg-white/80 px-3 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl">

    <div className="flex items-center justify-between">

      {/* Logo */}
      <a
        href="#home"
        className="flex items-center gap-2 rounded-full px-3 py-2"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#111] text-xs font-semibold text-white">
          A
        </span>

        <span className="hidden text-sm font-semibold tracking-tight sm:block">
          AMITH<span className="text-[#78947d]">.</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-1 md:flex">
        {[
          ["About", "about"],
          ["Skills", "skills"],
          ["Projects", "projects"],
          ["Achievements", "achievements"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full px-4 py-2 text-xs text-[#666] transition duration-200 hover:bg-[#f3f4f1] hover:text-[#111]"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">

        {/* GitHub */}
        <a
          href="https://github.com/Amith-k07"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-black/10 px-4 py-2 text-xs text-[#555] transition duration-200 hover:border-black/20 hover:bg-[#f3f4f1] hover:text-[#111] sm:block"
        >
          GitHub ↗
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="rounded-full bg-[#111] px-4 py-2 text-xs font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#78947d]"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
       <button
  type="button"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  onClick={() => setMenuOpen(!menuOpen)}
  className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f4f1] text-[#222] md:hidden"
>
  <span className="text-lg leading-none">
    {menuOpen ? "×" : "☰"}
  </span>
</button>

      </div>
    </div>
    {menuOpen && (
  <div className="mt-2 border-t border-black/10 px-2 pb-2 pt-3 md:hidden">
    <div className="flex flex-col gap-1">

      {[
        ["About", "about"],
        ["Skills", "skills"],
        ["Projects", "projects"],
        ["Achievements", "achievements"],
        ["Contact", "contact"],
      ].map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setMenuOpen(false)}
          className="rounded-2xl px-4 py-3 text-sm text-[#666] transition hover:bg-[#f3f4f1] hover:text-[#111]"
        >
          {label}
        </a>
      ))}

      <a
        href="https://github.com/Amith-k07"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenuOpen(false)}
        className="mt-1 rounded-2xl bg-[#111] px-4 py-3 text-center text-sm text-white"
      >
        GitHub ↗
      </a>

    </div>
  </div>
)}
  </nav>
</header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="float-card absolute right-[-12rem] top-24 h-[38rem] w-[38rem] rounded-full bg-[#e3eee4] blur-3xl" />
          <div className="float-card-slow absolute bottom-[-10rem] left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#f1f5f0] blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-4">

          {/* HERO TEXT */}
          <div className="reveal relative z-20">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#78947d]" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#777]">
                AI & Data Science · Developer · Builder
              </p>
            </div>

<h1 className="max-w-4xl text-[clamp(2.8rem,8vw,6.8rem)] font-bold leading-[0.86] tracking-[-0.06em]">
  <span className="block whitespace-nowrap">
    KOLLA P S N V
  </span>

  <span className="block whitespace-nowrap text-[#91a596]">
    AMITH KUMAR
  </span>
</h1>
            <p className="mt-8 max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              I make things that work{" "}
              <span className="italic text-[#78947d]">beautiful.</span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#666] md:text-lg">
              I&apos;m an Artificial Intelligence & Data Science student who
              enjoys building useful products, exploring technology, and
              turning ideas into things people can actually use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#111] px-7 py-4 text-sm font-medium text-white shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg"
              >
                Let&apos;s Connect
                <span>↗</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Amith-k07"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f7f8f5] text-xs font-semibold transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/kolla-p-s-n-v-amith-kumar-6823a7358"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f7f8f5] text-xs font-semibold transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                in
              </a>

              <a
                href="mailto:kpsnv.amith.kumar@gmail.com"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f7f8f5] text-xs font-semibold transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                @
              </a>

              <span className="ml-2 hidden h-5 w-px bg-black/10 sm:block" />

              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#888]">
                <span className="h-2 w-2 rounded-full bg-[#78947d]" />
                Open to opportunities
              </span>
            </div>
          </div>

          {/* HERO PHOTO */}
          <div className="relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[520px] lg:h-[720px]">

            {/* Green shape */}
            <div className="absolute bottom-8 right-[5%] h-[27rem] w-[23rem] rounded-[48%_52%_42%_58%/55%_44%_56%_45%] bg-[#e3eee4] md:h-[34rem] md:w-[28rem]" />

            {/* Decorative orbital line */}
            <div className="absolute right-[-8%] top-[42%] h-44 w-[34rem] rotate-[-18deg] rounded-[50%] border border-[#78947d]/40" />

            <span className="absolute right-[6%] top-[34%] h-3 w-3 rounded-full bg-[#78947d]" />
            <span className="absolute left-[7%] top-[58%] h-2.5 w-2.5 rounded-full bg-[#78947d]" />

            {/* Person */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-[450px] sm:h-[540px] lg:h-[650px]">
              <Image
                src="/profile-cutout.png"
                alt="Kolla P S N V Amith Kumar"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.13)] transition duration-700 hover:scale-[1.015]"
              />
            </div>

            {/* Floating card 1 */}
            <div className="float-card absolute left-[1%] top-[38%] z-20 rounded-2xl px-3 py-3 text-sm sm:left-[-2%] sm:px-5 sm:py-4  border border-black/10 bg-white/90 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.09)] backdrop-blur">
              <div className="flex gap-3">
                <span className="text-lg text-[#78947d]">✦</span>
                <div>
                  <p className="text-sm font-semibold">Build</p>
                  <p className="text-xs text-[#777]">Experiment</p>
                  <p className="text-xs text-[#777]">Learn · Repeat</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="float-card-slow absolute right-[-1%] top-[58%] z-20 rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.09)] backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
                Focus
              </p>
              <p className="mt-1 text-sm font-semibold">
                Data → Ideas
              </p>
              <p className="text-xs text-[#777]">
                Ideas → Products
              </p>
            </div>

            {/* Small handwritten accent */}
            <div className="absolute right-2 top-[13%] z-20 hidden rotate-6 font-serif text-lg italic text-[#78947d] md:block">
              Better
              <br />
              solutions ↗
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#999] lg:flex">
          <span className="grid h-9 w-6 place-items-center rounded-full border border-black/20">
            ↓
          </span>
          Scroll to explore
        </div>
      </section>

      {/* ABOUT */}
<section
  id="about"
  className="px-6 py-24 md:px-10 lg:px-16"
>
  <div className="reveal mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

      {/* Left — Introduction */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
          02 / About
        </p>

        <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
          More than
          <br />
          just <span className="text-[#78947d]">code.</span>
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-[#666] md:text-base">
          <p>
            I&apos;m <span className="font-medium text-[#222]">
              KOLLA P S N V AMITH KUMAR
            </span>
            , an AI & Data Science student and developer who loves building things, 
            solving problems, and turning ideas into reality.
          </p>

          <p>
            From experimenting with AI to creating web applications, I enjoy learning by building. Every project is an 
            opportunity to explore something new, improve my skills, and create something that actually makes a difference.
          </p>

          <p>
            I&apos;m constantly learning, experimenting with new technologies,
            and building projects that help me grow as a developer.
          </p>
        </div>
      </div>

      {/* Right — Quick Info */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

        <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f8f5] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf1eb]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
            Focus
          </p>

          <p className="mt-3 text-lg font-medium">
            AI & Data Science
          </p>

          <p className="mt-1 text-sm text-[#777]">
            Exploring intelligent systems and practical applications.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
            Education
          </p>

          <p className="mt-3 text-lg font-medium">
            B.Tech — AI & DS
          </p>

          <p className="mt-1 text-sm text-[#777]">
            SRKR Engineering College · 2024–2028
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
            Currently
          </p>

          <p className="mt-3 text-lg font-medium">
            Learning · Building · Exploring
          </p>

          <p className="mt-1 text-sm text-[#777]">
            Turning concepts into projects and real experiences.
          </p>
        </div>

      </div>
    </div>

    {/* Bottom statement */}
    <div className="mt-16 border-t border-black/10 pt-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-xs uppercase tracking-[0.18em] text-[#aaa]">
          My approach
        </p>

        <p className="text-sm text-[#666]">
          Learn → Build → Break → Improve → Repeat.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* SKILLS */}
<section
  id="skills"
  className="px-6 py-24 md:px-10 lg:px-16"
>
  <div className="reveal mx-auto max-w-7xl">

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
          03 / Toolkit
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Skills<span className="text-[#78947d]">.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-[#666]">
        Technologies I use to learn, experiment, and turn ideas into
        working projects.
      </p>
    </div>

    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

      {/* Languages */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-[#f7f8f5] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf1eb]">
        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          01
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Languages
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Python", "Java", "JavaScript"].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-3 py-2 text-xs text-[#555]"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>

      {/* Development */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          02
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Development
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "Next.js", "FastAPI", "HTML & CSS"].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#f3f4f1] px-3 py-2 text-xs text-[#555]"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>

      {/* AI & Data */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          03
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          AI & Data
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["AI / ML", "MongoDB", "Supabase", "Problem Solving"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#f3f4f1] px-3 py-2 text-xs text-[#555]"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </article>

      {/* Tools */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-[#f7f8f5] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf1eb]">
        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          04
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Tools
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Git", "GitHub"].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-3 py-2 text-xs text-[#555]"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>

    </div>

    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
        Always learning
      </p>

      <p className="text-sm text-[#666]">
        Learn → Build → Experiment
      </p>
    </div>

  </div>
</section>

{/* PROJECTS */}
<section
  id="projects"
  className="px-6 pb-20 pt-28 md:px-10 lg:px-16"
>
  <div className="reveal mx-auto max-w-6xl">

    {/* Heading */}
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
          04 / Selected Work
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Projects<span className="text-[#78947d]">.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-[#666]">
        Things I&apos;ve built, explored, and experimented with.
      </p>
    </div>

    {/* Project Cards */}
    <div className="mt-9 grid gap-4 lg:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
        >
          {/* Visual */}
          <div className="relative h-36 overflow-hidden bg-[#e5eee6] p-4">

            <div className="absolute -right-10 -top-14 h-36 w-36 rounded-full border-[28px] border-white/35 transition duration-500 group-hover:scale-110" />

            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />

            <div className="relative flex items-start justify-between">
              <span className="rounded-full bg-white/75 px-2.5 py-1 text-[10px] tracking-widest text-[#666]">
                {project.number}
              </span>

              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/80 text-sm transition duration-300 group-hover:bg-[#111] group-hover:text-white">
                ↗
              </span>
            </div>

            {/* Project Visual */}
            {index === 0 ? (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-end gap-2">

                <div className="h-14 w-20 rotate-[-6deg] rounded-lg border border-black/10 bg-white p-2 shadow-md">
                  <div className="grid grid-cols-4 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 rounded-sm ${
                          i % 5 === 0
                            ? "bg-[#78947d]"
                            : "bg-black/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="h-16 w-24 rounded-lg bg-[#111] p-3 text-white shadow-lg">
                  <p className="text-[7px] uppercase tracking-widest text-white/50">
                    Optimization
                  </p>

                  <p className="mt-2 text-[10px]">
                    Smart Schedule
                  </p>
                </div>

              </div>
            ) : (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-end">

                <div className="h-16 w-28 rotate-[-4deg] rounded-lg border border-black/10 bg-white p-3 shadow-lg">
                  <div className="h-1.5 w-16 rounded-full bg-black/10" />
                  <div className="mt-2 h-1.5 w-20 rounded-full bg-black/5" />
                  <div className="mt-2 h-1.5 w-16 rounded-full bg-black/5" />

                  <div className="mt-3 flex gap-1">
                    <span className="h-4 w-9 rounded-full bg-[#e5eee6]" />
                    <span className="h-4 w-7 rounded-full bg-black/5" />
                  </div>
                </div>

                <div className="-ml-3 h-14 w-20 rotate-[5deg] rounded-lg bg-[#111] p-3 text-white shadow-lg">
                  <p className="text-[7px] uppercase tracking-widest text-white/45">
                    AI assisted
                  </p>

                  <p className="mt-1.5 text-[9px]">
                    Resume Builder
                  </p>
                </div>

              </div>
            )}

            <p className="absolute bottom-3 left-4 text-[8px] uppercase tracking-[0.16em] text-[#666]">
              {project.status}
            </p>
          </div>

          {/* Content */}
          <div className="p-5">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <span className="text-xs text-[#aaa]">
                0{index + 1}
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-[#666]">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f3f4f1] px-2.5 py-1 text-[10px] text-[#555]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
              <span className="text-[9px] uppercase tracking-[0.14em] text-[#aaa]">
                Case study coming soon
              </span>

              <span className="text-xs font-medium transition-transform duration-300 group-hover:translate-x-1">
                Explore →
              </span>
            </div>

          </div>
        </article>
      ))}
    </div>

    {/* More Projects */}
    <div className="mt-4 rounded-xl border border-dashed border-black/15 bg-[#f7f8f5] px-5 py-4 text-center">
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
        More projects coming soon
      </p>
    </div>

  </div>
</section>

      {/* EDUCATION */}
      <section className="border-y border-black/10 bg-[#f7f8f5] px-6 py-28 md:px-10 lg:px-16">
        <div className="reveal mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
            05 / Education
          </p>

          <div className="md:col-span-2">
            <p className="text-sm text-[#999]">2024 — 2028</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              B.Tech — Artificial Intelligence & Data Science
            </h2>

            <p className="mt-4 text-lg text-[#666]">
              SRKR Engineering College
            </p>
          </div>
        </div>
      </section>

    {/* ACHIEVEMENTS */}
<section
  id="achievements"
  className="px-6 py-24 md:px-10 lg:px-16"
>
  <div className="reveal mx-auto max-w-7xl">

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
          06 / Milestones
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Achievements<span className="text-[#78947d]">.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-[#666]">
        A few milestones from my journey so far.
      </p>
    </div>

    <div className="mt-12 grid gap-4 md:grid-cols-2">

      {/* Hackathons */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-[#f7f8f5] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf1eb]">
        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
            01
          </span>

          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg transition duration-300 group-hover:bg-[#111] group-hover:text-white">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Hackathons
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#666]">
          Competitive projects, problem-solving, and building practical
          solutions with a team.
        </p>

        <div className="mt-7 border-t border-black/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
            Details coming soon
          </span>
        </div>
      </article>

      {/* Certifications */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]">
        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
            02
          </span>

          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f3f4f1] text-lg transition duration-300 group-hover:bg-[#111] group-hover:text-white">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Certifications
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#666]">
          Courses and certifications that reflect my continuous learning
          across technology and AI.
        </p>

        <div className="mt-7 border-t border-black/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
            Details coming soon
          </span>
        </div>
      </article>

      {/* Internships */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]">
        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
            03
          </span>

          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f3f4f1] text-lg transition duration-300 group-hover:bg-[#111] group-hover:text-white">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Internships
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#666]">
          Professional experiences, real-world projects, and opportunities
          to apply what I learn.
        </p>

        <div className="mt-7 border-t border-black/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
            Details coming soon
          </span>
        </div>
      </article>

      {/* Awards */}
      <article className="group rounded-[1.75rem] border border-black/10 bg-[#f7f8f5] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf1eb]">
        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
            04
          </span>

          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg transition duration-300 group-hover:bg-[#111] group-hover:text-white">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Awards
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#666]">
          Recognition, accomplishments, and milestones achieved along the
          way.
        </p>

        <div className="mt-7 border-t border-black/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
            Details coming soon
          </span>
        </div>
      </article>

    </div>
  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="px-6 py-24 md:px-10 lg:px-16"
>
  <div className="reveal mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[2rem] bg-[#111] px-8 py-16 text-white md:px-14 md:py-20">

      {/* Decorative shapes */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-white/5" />
      <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full border-[35px] border-[#78947d]/20" />

      <div className="relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          07 / Contact
        </p>

        <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Let&apos;s build
          <br />
          something{" "}
          <span className="text-[#91a596]">meaningful.</span>
        </h2>

        <p className="mt-7 max-w-xl text-sm leading-6 text-white/55 md:text-base">
          Have an idea, opportunity, or project in mind?
          I&apos;d love to hear about it and explore what we can build together.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          <a
            href="mailto:kpsnv.amith.kumar@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#111] transition duration-300 hover:-translate-y-1 hover:bg-[#e5eee6]"
          >
            Get in touch →
          </a>

          <a
            href="https://www.linkedin.com/in/kolla-p-s-n-v-amith-kumar-6823a7358"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
          >
            LinkedIn ↗
          </a>
          <a
  href="https://github.com/Amith-k07"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
>
  GitHub ↗
</a>

        </div>
      </div>

      {/* Email */}
      <div className="relative mt-14 border-t border-white/10 pt-6">
        <p className="text-xs uppercase tracking-[0.16em] text-white/30">
          Email
        </p>

        <a
          href="mailto:kpsnv.amith.kumar@gmail.com"
          className="mt-2 inline-block text-sm text-white/70 transition hover:text-white md:text-base"
        >
          kpsnv.amith.kumar@gmail.com
        </a>
      </div>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-black/10 px-6 py-8 md:px-10 lg:px-16">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

    <div>
      <p className="text-sm font-semibold tracking-tight">
        AMITH<span className="text-[#78947d]">.</span>
      </p>

      <p className="mt-1 text-xs text-[#999]">
        AI & Data Science · Developer · Builder
      </p>
    </div>

    <div className="flex items-center gap-5 text-xs text-[#777]">
      <a
        href="https://github.com/Amith-k07"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#111]"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/kolla-p-s-n-v-amith-kumar-6823a7358"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#111]"
      >
        LinkedIn
      </a>

      <a
        href="mailto:kpsnv.amith.kumar@gmail.com"
        className="transition hover:text-[#111]"
      >
        Email
      </a>
    </div>

    <p className="text-xs text-[#aaa]">
      © {new Date().getFullYear()} KOLLA P S N V AMITH KUMAR
    </p>

  </div>
</footer>
    </main>
  );
}