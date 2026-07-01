"use client";

import Image from "next/image";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaMoon, FaPaperPlane, FaPhoneAlt, FaStar, FaSun } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Testimonials", "#testimonials"],
] as const;

const socialItems = [
  ["GitHub", "GH", "https://github.com/WYZEPRINCE"],
  ["LinkedIn", "in", "https://www.linkedin.com/in/adelaniadelaja"],
  ["Behance", "Be", "https://www.behance.net/adelaniadelaja"],
] as const;

const skillGroups = {
  design: [
    "Figma",
    "Wireframing",
    "Prototyping",
    "UX Research",
    "Design Systems",
    "Adobe XD",
    "Interaction Design",
    "Visual Design",
  ],
  development: [
    "React",
    "NextJs",
    "Typescript",
    "Javascript",
    "HTML/CSS",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ],
} as const;

type SkillTab = keyof typeof skillGroups;
type ProjectTab = "all" | "design" | "development";
type ThemeMode = "dark" | "light";

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const formlyAccessKey = "f9c7baa9ffe64ca0996ab794b12f63b9";

const contactInitialValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Your name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email address is required"),
  subject: Yup.string().trim().required("Please select a topic"),
  message: Yup.string()
    .trim()
    .min(20, "Message should be at least 20 characters")
    .max(500, "Message should not be more than 500 characters")
    .required("Your message is required"),
});

const projects = [
  {
    title: "Tenacious Dialogue Website",
    image: "/images/tenacious-dialogue.png",
    url: "https://tenaciousdialogues.com",
    type: "UI/UX Design & Development",
    description:
      "A fully functional and responsive website for a coaching and consulting company in the USA.",
    tags: ["Figma", "UI Design", "Wix"],
    category: "design",
    featured: false,
  },
  {
    title: "HealthPointer WebApp",
    image: "/images/healthpointer.png",
    url: "https://healthpointer.netlify.app",
    type: "UI/UX Design & Development",
    description:
      "A fully functional and responsive smart healthcare webapp with AI-chatbot to check 10 most common illness in Nigeria, appointment booking flow and health resources.",
    tags: ["Figma", "UI Design", "WebApp", "React"],
    category: "design",
    featured: true,
  },
  {
    title: "Fransunisoft Website",
    image: "/images/fransunisoft.png",
    url: "https://fransunisoft.com",
    type: "UI/UX Design & Development",
    description:
      "A fully functional and responsive website for a venture & talent studio building Africa's next generation of startups.",
    tags: ["Figma", "UI Design", "NextJs"],
    category: "design",
    featured: true,
  },
  {
    title: "Delayfree Landing Page",
    image: "/images/delayfreeLanding.png",
    url: "https://delayfree.com",
    type: "UI/UX Design & Development",
    description:
      "A fully functional and responsive waitlist / landing page for a logistics company with the aim of generating and converting visitors.",
    tags: ["Figma", "UI Design", "NextJs", "Typescript"],
    category: ["design", "development"],
    featured: true,
  },
  {
    title: "DelayFree Delivery Partner Dashboard",
    image: "/images/delayfreeDash.png",
    url: "https://delayfree.com/overview",
    type: "UI/UX Design & Development",
    description:
      "A responsive logistics partner dashboard for managing delivery orders, agents, earnings, ratings, and verification workflows in real time.",
    tags: ["Figma", "UI Design", "Dashboard", "NextJs", "Typescript"],
    category: ["design", "development"],
    featured: false,
    featuredTabs: ["design"],
  },
  {
    title: "Shiny Star School Website",
    image: "/images/shiny-star.png",
    url: "https://shinystarschools.com",
    type: "Development",
    description:
      "A responsive school website built to present admissions, academics, school values, and parent-facing information clearly.",
    tags: ["NextJs", "Typescript", "Responsive UI", "School Website"],
    category: "development",
  },
  {
    title: "TjResources Ltd Website",
    image: "/images/tjresources.png",
    url: "https://tjresourceltd.com",
    type: "Development",
    description:
      "A corporate website for a resources company with structured service pages, clear calls to action, and mobile-first layouts.",
    tags: ["NextJs", "Typescript", "Corporate Website", "Responsive UI"],
    category: "development",
  },
  {
    title: "Vigour Technology Website",
    image: "/images/vigour.png",
    url: "https://vigourtech.org",
    type: "Development",
    description:
      "A technology & IT solutions company website focused on services, credibility, IT-consultancy and conversion-ready sections across desktop and mobile.",
    tags: ["NextJs", "Typescript", "Company Website", "Frontend"],
    category: "development",
    featured: true,
  },
];

const experienceItems = [
   {
    role: "CEO & Founder",
    company: "Delayfree",
    period: "2025 - Present",
    type: "Full Time",
    points: [
      "Founded and currently lead DelayFree, overseeing business strategy, operations, and product execution.",
      "Led product development and cross-functional operations, overseeing the design and rollout of customer, partner, rider, and admin experiences.",
      "Drove business growth through partnership development, go-to-market planning, and operational systems focused on reliable, transparent, and timely deliveries.",
      "Directed company positioning, process improvement, and expansion planning to build scalable logistics infrastructure for businesses and individuals in Nigeria.",
    ],
  },
  {
    role: "Front-End Development Lead (Remote)",
    company: "Vigour Technology, Lagos",
    period: "2025 - Present",
    type: "Full-time",
    points: [
      "Lead frontend delivery across company websites, dashboards, and client products",
      "Build responsive interfaces with React, NextJs, TypeScript, and reusable UI patterns",
      "Collaborate with stakeholders to translate product goals into clean, usable experiences",
      "Review implementation quality and guide developers through design-to-code handoff",
    ],
  },
  {
    role: "UI/UX Designer & Web Developer",
    company: "Tenacious Dialogues, USA",
    period: "2026",
    type: "Contract",
    points: [
      "Redesigned and rebuilt the company website for a clearer coaching and consulting experience using Figma & Wix",
      "Improved the visual hierarchy, service presentation, and responsive page flow",
      "Implemented polished website sections aligned with the brand's communication style",
      "Delivered the project with close attention to detail, timing, and client feedback",
    ],
  },
  {
    role: "Project Lead & Developer (Remote)",
    company: "Fransunisoft, Lagos",
    period: "2025 - Present",
    type: "Volunteer",
    points: [
      "Designed and developed a responsive brand website for a venture and talent studio",
      "Created modern page layouts that present startup programs, services, Talent Management Dashboard and credibility clearly",
      "Balanced UI polish with fast-loading, maintainable frontend implementation",
      "Supported content structure and interaction details from concept through launch",
    ],
  },
  {
    role: "Lead Product Designer",
    company: "3MTTNigeria Lagos",
    period: "2025",
    type: "Internship",
    points: [
      "Spearheaded the design of an AI-powered healthcare webapp screens for symptom checking chatbot, appointment booking, and resources",
      "Mapped user flows around trust, clarity, and quick access to health information",
      "Created responsive interface patterns for web app use across mobile and desktop",
      "Collaborated on product decisions that made complex health actions easier to complete",
    ],
  },
  {
    role: "Front-End Developer",
    company: "KodeHauz, AkwaIbom",
    period: "2024-2025",
    type: "Internship",
    points: [
      "Led a cross-functional team to create a fully functional and responsive website for Kodecamp, enhancing user engagement.",
      " Implemented designs with Pixel Perfect precision using Next.js, ensuring a seamless user experience.",
      "Created responsive interface patterns compatible across mobile and desktop",
      "Collaborated with designers and backend developers to optimize performance and responsiveness, resulting in a 30% increase in site speed.",
    ],
  },
  {
    role: "Product Designer",
    company: "Glesyde, Lagos",
    period: "2024",
    type: "Freelance",
    points: [
      "Led a design team for a SaaS startup to successfully revamp a telehealth app for a client, enhancing user engagement and satisfaction.",
      "Developed a comprehensive design system to ensure consistency and efficiency across the platform. ",
      "Conducted regular QA/QC sessions with developers, achieving pixel-perfect implementations and reducing design discrepancies.",
      "Support clients and stakeholders with redesigns, performance improvements, and launch-ready delivery",
    ],
  },
];

const testimonials = [
  {
    name: "Dr. Shannon Ingram",
    role: "CEO and Founder",
    company: "Tenacious Dialogues",
    location: "United States",
    category: "Design and Development",
    project: "Redesign and rebuild of website",
    image: "/images/DrShannon.jpeg",
    quote:
      "Adelani worked as a UI/UX designer and Web developer for my company and completed an outstanding rebuild of my website www.tenaciousdialogues.com. He was extremely professional and knowledgeable. He executed every detail in a timely manner with excellence. I highly recommend Adelani's services.",
  },
  {
    name: "Oluseyi Ayodele",
    role: "CEO and Founder ",
    company: "Fransunisoft",
    location: "Nigeria",
    category: "UI/UX Design & Development",
    project: "Responsive brand Website and Talent Management system Dashboard",
    image: "/images/CM.jpg",
    quote:
      "Adelani led a team to build my full responsive and functional brand website in 2 weeks, faster than industry standard. He doubled as UI/UX deigner and web developer, and his attention to details is highly commendable. He is highly recommended ",
  },
  {
    name: "Adeleji Olugbodu",
    role: "CEO and Founder",
    company: "Vigour Technology",
    location: "Nigeria",
    category: "Development",
    project: "Several Website Creation and overhaul",
    image: "/images/adedeji.png",
    quote:
      "Adelani joined Vigour and quickly established himself as the technical backbone of our team. He leads our development efforts with skill and dedication, consistently delivering high-quality work across our products and projects. What impresses me most is not just what he builds, but how he builds it — thoughtfully, efficiently, and always with the bigger picture in mind."
  },
  {
    name: "Orodje (Wisdom) Akpotor",
    role: "CEO",
    company: "Glesyde",
    location: "Nigeria",
    category: "UI/UX Design",
    project: "Digital Experience Strategy",
    image: "/images/glesyde.jpg",
    quote:
      "Working with Adelani was a great experience. He collaborated in redesigning a client’s health app project with real attention to detail, understands business goals, high communication skill and speed. The client loved the new design. Highly recommended.",
  },
];

function Logo() {
  return (
    <a aria-label="Adelani home" className="logo" href="#top">
      <Image alt="ADEL" height={42} priority src="/images/adelLogo2.png" width={164} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="socials">
      {socialItems.map(([label, symbol, url]) => (
        <a aria-label={label} href={url} key={label} rel="noreferrer" target="_blank">
          {label === "GitHub" ? <FaGithub aria-hidden="true" size={17} /> : symbol}
        </a>
      ))}
    </div>
  );
}

function RatingStars() {
  return (
    <span aria-label="5 out of 5 stars" className="rating-stars" role="img">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar aria-hidden="true" key={index} />
      ))}
    </span>
  );
}

function Availability() {
  return (
    <span className="availability"><span />
      Available for Hire
    </span>
  );
}

function ThemeToggle({
  theme,
  onToggleTheme,
}: {
  theme: ThemeMode;
  onToggleTheme: () => void;
}) {
  const isLight = theme === "light";

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="theme-toggle"
      onClick={onToggleTheme}
      type="button"
    >
      {isLight ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
    </button>
  );
}

function Header({
  theme,
  onToggleTheme,
}: {
  theme: ThemeMode;
  onToggleTheme: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Availability />
            <ThemeToggle onToggleTheme={onToggleTheme} theme={theme} />
            <a className="button button-primary" href="#contact">
              Let&apos;s Talk
            </a>
          </div>
          <button
            aria-expanded={isOpen}
            aria-label="Open navigation"
            className="menu-toggle"
            onClick={openMenu}
            onTouchEnd={(event) => {
              event.preventDefault();
              openMenu();
            }}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <button
        aria-label="Close navigation overlay"
        className={`drawer-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        onTouchEnd={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        type="button"
      />

      <div className={`mobile-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="drawer-head">
          <Logo />
          <button
            aria-label="Close navigation"
            className="drawer-close"
            onClick={closeMenu}
            onTouchEnd={(event) => {
              event.preventDefault();
              closeMenu();
            }}
            type="button"
          >
            ×
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="drawer-nav">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <div className="drawer-actions">
          <Availability />
          <ThemeToggle onToggleTheme={onToggleTheme} theme={theme} />
          <a className="button button-primary" href="#contact" onClick={closeMenu}>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`section-reveal ${isVisible ? "is-visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="shell hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Hello I&apos;m</p>
        <h1>
          Adelani Adelaja,
          <strong>Front-End Web Developer</strong>
          <span className="text-white!">& UI/UX Designer</span>
        </h1>
        <p className="hero-description">
          I craft delightful digital experiences that blend beautiful design with clean, performant
          code. Specializing in React applications and human-centered interfaces.
        </p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#projects">
            View My Work <span>→</span>
          </a>
          <a className="button button-outline" href="#contact">
            Hire Me
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="hero-visual">
        <span className="portrait-shadow" />
        <div className="portrait-card">
          <Image
            alt="Adelani Adelaja"
            fill
            priority
            sizes="(max-width: 700px) 90vw, 440px"
            src="/images/adelani-headshot.jpg"
          />
        </div>
        <div className="code-card code-top">
          <i />
          <i />
          <i />
          <code>const design = &#123;</code>
          <code> creativity: true,</code>
          <code> passion: ∞</code>
        </div>
        <div className="code-card code-bottom">
          <code>&lt;Component</code>
          <code> clean=&quot;true&quot;</code>
          <code> responsive=&quot;always&quot; /&gt;</code>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="shell about" id="about">
      <div className="about-visual">
        <span />
        <Image alt="Designer working at a desk" fill sizes="(max-width: 700px) 94vw, 500px" src="/images/workspace.png" />
        <div className="stats">
          {[
            ["3+", "Years Experience"],
            ["15+", "Projects Completed"],
            ["5+", "Teams Led"],
            ["98%", "Client Satisfaction"],
          ].map(([number, label]) => (
            <div key={`${number}-${label}`}>
              <strong>{number}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">ABOUT ME (Abridged)</p>
        <h2>
          Designing with empathy,
          <span> building with precision</span>
        </h2>
        <p>
          I&apos;m the CEO & Founder of Delayfree Logistics Marketplace - a logistics-tech platform that allows customers, online vendors, and SMEs to compare multiple delivery companies base on proximity, price and rating. Thereby giving hyper-local delivery companies structured visibility and operational efficiency. Passionate Front-End Developer and UI/UX Designer with 3+ years of working experience based in Nigeria, dedicated to
          creating digital experiences that are not just visually stunning but genuinely useful and 
          accessible to everyone.
        </p>
        <p>
          My approach combines human-centered design thinking with technical excellence. I believe
          that great design solves real problems, and great code brings those solutions to life
          seamlessly. Every pixel matters, and every line of code should serve a purpose.
        </p>
        <p>
          When I&apos;m not crafting interfaces or writing React components, you&apos;ll find me exploring
          new design trends, contributing to open-source projects, or mentoring aspiring developers
          in the community.
        </p>
        <div className="quality-list">
          {["Problem Solver", "User Centered", "Clean Code", "Passionate Leader"].map((item, index) => (
            <span key={`${item}-${index}`}>◉ {item}</span>
          ))}
        </div>
        <a className="button button-download" href="/Adelani_Adelaja_CV.pdf" rel="noreferrer" target="_blank">
          ↓ Download Resume
        </a>
      </div>
    </section>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("development");
  const activeSkills = skillGroups[activeTab];

  return (
    <section className="section section-bordered" id="skills">
      <div className="shell">
        <SectionIntro
          description="The arsenal behind great digital products — from design to deployment"
          eyebrow="MY EXPERTISE"
          title="Tools & Technologies"
        />
        <div className="skill-tabs">
          <button
            className={activeTab === "development" ? "active" : ""}
            onClick={() => setActiveTab("development")}
            type="button"
          >
            &lt; &gt; Front-End Dev
          </button>
          <button
            className={activeTab === "design" ? "active" : ""}
            onClick={() => setActiveTab("design")}
            type="button"
          >
            ◉ UI/UX Design
          </button>
          <span>◉ UI/UX Design</span>
          <span>‹ › Front-End Dev</span>
        </div>
        <div className="skill-grid">
          {activeSkills.map((skill, index) => (
            <article className={index === 0 ? "skill-card active" : "skill-card"} key={skill}>
              <b>♧</b>
              <h3>{skill}</h3>
              <div className="meter">
                <span />
              </div>
              <small>95%</small>
            </article>
          ))}
        </div>
        <p className="tools-label">Also experienced with</p>
        <div className="tags centered">
          {["Framer", "Wix", "Canva", "RestApis", "Playwright", "Sonarqube", "Wordpress", "Linear"].map(
            (tag) => (
              <span key={tag}>{tag}</span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("all");
  const visibleProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.category.includes(activeTab));
  const projectTypeLabel =
    activeTab === "design"
      ? "UI/UX Design"
      : activeTab === "development"
        ? "Development"
        : undefined;

  return (
    <section className="section projects shell" id="projects">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">PORTFOLIO</p>
          <h2>Selected Work</h2>
        </div>
        <div className="filter-tags">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
            type="button"
          >
            All Projects
          </button>
          <button
            className={activeTab === "design" ? "active" : ""}
            onClick={() => setActiveTab("design")}
            type="button"
          >
            Design
          </button>
          <button
            className={activeTab === "development" ? "active" : ""}
            onClick={() => setActiveTab("development")}
            type="button"
          >
            Development
          </button>
          <span>All Projects</span>
          <span>Design</span>
          <span>Development</span>
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <Image alt="" fill sizes="(max-width: 700px) 94vw, 48vw" src={project.image} />
              <a className="view-site" href={project.url} aria-label={`View ${project.title}`} rel="noreferrer" target="_blank">
                View Website →
              </a>
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span>{projectTypeLabel ?? project.type}</span>
                {(project.featured || project.featuredTabs?.includes(activeTab)) && <em>Featured</em>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a className="button button-outline view-all" href="#projects">
        View All Projects →
      </a>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-bordered experience" id="experience">
      <div className="shell">
        <SectionIntro
          description="Building products, leading teams, and creating impact across various roles"
          eyebrow="CAREER JOURNEY"
          title="Experience & Collaborations"
        />
        <div className="timeline">
          {experienceItems.map((experience, index) => (
            <article className="experience-card" key={`${experience.role}-${index}`}>
              <div className="experience-title">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <div>
                  <span>{experience.type}</span>
                  <small>{experience.period}</small>
                </div>
              </div>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>◉ {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="education">
          <h2>Education</h2>
          <article>
            <b>♧</b>
            <div>
              <h4>HND in Business Admin & Management</h4>
              <p>Federal Polytechnic Nasarawa, Nigeria</p>
              <small>2021 - 2023</small>
            </div>
            <div>
              <h4>Professional Soft Skills Developmentt</h4>
              <p>Jobberman Nigeria </p>
              <small>2025</small>
            </div>
          </article>
        </div>
        <div className="education">
          <h2>Awards, Programs & Fellowships</h2>
          <article>
            <b>♧</b>
            <div>
              <h4>Alumni Huawei LEAP </h4>
              <p>Shenzhen, China</p>
              <small>2024 - Till Date</small>
            </div>
          </article>
          <article>
            <b>♧</b>
            <div>
              <h4>Alumni 3MTTNigeria </h4>
              <p>Lagos, Nigeria</p>
              <small>2023 - Till Date</small>
            </div>
          </article>
          <article>
            <b>♧</b>
            <div>
              <h4>Alumni ALX AICE</h4>
              <p>Nairobi, Kenya</p>
              <small>2024 - Till Date</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swipeStart, setSwipeStart] = useState<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];

  const showTestimonial = (index: number) => {
    const lastIndex = testimonials.length - 1;

    if (index < 0) {
      setActiveIndex(lastIndex);
      return;
    }

    if (index > lastIndex) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index);
  };

  const handleSwipeEnd = (clientX: number) => {
    if (swipeStart === null) return;

    const distance = clientX - swipeStart;
    if (Math.abs(distance) > 42) {
      showTestimonial(activeIndex + (distance < 0 ? 1 : -1));
    }

    setSwipeStart(null);
  };

  return (
    <section className="section testimonials shell" id="testimonials">
      <SectionIntro
        description="Real words from real collaborators - every project is a partnership built on trust and results."
        eyebrow="CLIENTS REVIEWS"
        title={
          <>
            What People <span>Say</span>
          </>
        }
      />
      <article
        className="featured-testimonial"
        onPointerDown={(event) => setSwipeStart(event.clientX)}
        onPointerLeave={(event) => handleSwipeEnd(event.clientX)}
        onPointerUp={(event) => handleSwipeEnd(event.clientX)}
      >
        <strong className="quote">&quot;</strong>
        <div className="review-person">
          <Image alt="" height={82} src={activeTestimonial.image} width={82} />
          <h3>{activeTestimonial.name}</h3>
          <p>{activeTestimonial.role}</p>
          <p className="review-company">{activeTestimonial.company}</p>
          <p className="review-location">{activeTestimonial.location}</p>
          <RatingStars />
          <span>{activeTestimonial.category}</span>
        </div>
        <div className="review-copy">
          <p>&quot;{activeTestimonial.quote}&quot;</p>
          <small>Project: {activeTestimonial.project}</small>
        </div>
      </article>
      <div className="testimonial-progress" aria-label="Testimonials progress">
        <span>
          {activeIndex + 1} of {testimonials.length} testimonials
        </span>
        <div>
          {testimonials.map((testimonial, index) => (
            <button
              aria-label={`Show testimonial ${index + 1}`}
              className={index === activeIndex ? "active" : ""}
              key={testimonial.project}
              onClick={() => showTestimonial(index)}
              type="button"
            />
          ))}
        </div>
      </div>
      <div className="review-list">
        {testimonials.map((testimonial, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            key={testimonial.project}
            onClick={() => showTestimonial(index)}
            type="button"
          >
            <Image alt="" height={56} src={testimonial.image} width={56} />
            <span />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.company}</p>
            <RatingStars />
          </button>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const formik = useFormik<ContactValues>({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, helpers) => {
      setSubmitStatus(null);

      try {
        const response = await fetch("https://formly.email/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: formlyAccessKey,
            ...values,
          }),
        });

        const text = await response.text();
        let data: { message?: string; raw?: string } | null = null;

        try {
          data = JSON.parse(text) as { message?: string; raw?: string };
        } catch {
          data = { raw: text };
        }

        if (response.ok || /success|ok|sent/i.test(JSON.stringify(data))) {
          helpers.resetForm();
          setSubmitStatus({
            type: "success",
            message: "Message sent successfully. I will get back to you shortly.",
          });
          return;
        }

        throw new Error(data?.message || text || "Unknown Formly response");
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus({
          type: "error",
          message: "Message failed to send. Please try again in a moment.",
        });
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  const messageLength = formik.values.message.length;

  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Let&apos;s Create
            <span>Something</span>
            Amazing Together
          </h2>
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Let&apos;s build something great.
          </p>
          <ul className="contact-list">
            <li><FaEnvelope aria-hidden="true" /> <span>adelaniadelaja@gmail.com</span></li>
            <li><FaPhoneAlt aria-hidden="true" /> <span>+2349056126667</span></li>
            <li><FaMapMarkerAlt aria-hidden="true" /> <span>Abuja, Nigeria</span></li>
          </ul>
          <p>Find me on</p>
          <SocialLinks />
        </div>
        <form className="contact-form" noValidate onSubmit={formik.handleSubmit}>
          <label>
            Your Name
            <input
              aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
              aria-invalid={formik.touched.name && Boolean(formik.errors.name)}
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="John Doe"
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="field-error" id="name-error">
                {formik.errors.name}
              </span>
            ) : null}
          </label>
          <label>
            Email Address
            <input
              aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
              aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="@yourmail.com"
              type="email"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="field-error" id="email-error">
                {formik.errors.email}
              </span>
            ) : null}
          </label>
          <label className="full">
            Subject
            <select
              aria-describedby={formik.touched.subject && formik.errors.subject ? "subject-error" : undefined}
              aria-invalid={formik.touched.subject && Boolean(formik.errors.subject)}
              name="subject"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.subject}
            >
              <option disabled value="">Select a topic</option>
              <option>New project</option>
              <option>Collaboration</option>
              <option>Job role</option>
              <option>Consultation</option>
            </select>
            {formik.touched.subject && formik.errors.subject ? (
              <span className="field-error" id="subject-error">
                {formik.errors.subject}
              </span>
            ) : null}
          </label>
          <label className="full">
            Your Message
            <textarea
              aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
              aria-invalid={formik.touched.message && Boolean(formik.errors.message)}
              maxLength={500}
              name="message"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Tell me about your project or idea..."
              value={formik.values.message}
            />
            <small>{messageLength}/500</small>
            {formik.touched.message && formik.errors.message ? (
              <span className="field-error" id="message-error">
                {formik.errors.message}
              </span>
            ) : null}
          </label>
          {submitStatus ? (
            <p className={`form-status ${submitStatus.type}`} role="status">
              {submitStatus.message}
            </p>
          ) : null}
          <button className="button button-primary full" disabled={formik.isSubmitting} type="submit">
            {formik.isSubmitting ? (
              "Sending"
            ) : (
              <>
                Send Message <FaPaperPlane aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = window.localStorage.getItem("adelani-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("adelani-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <RevealSection>
          <Hero />
        </RevealSection>
        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <Projects />
        </RevealSection>
        <RevealSection>
          <Experience />
        </RevealSection>
        <RevealSection>
          <Testimonials />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <RevealSection>
      <footer>
        <div className="shell footer-inner">
          <p>© 2026 <span>&lt;ADEL/&gt;</span> · All rights reserved</p>
          <p>Design & Built with　<b>♥</b>　By Adelani</p>
        </div>
      </footer>
      </RevealSection>
    </>
  );
}
