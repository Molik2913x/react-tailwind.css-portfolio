import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Decision Roulette",
    description:
      "An interactive decision-making web app that helps users randomly select options in a fun and engaging way. Features smooth animations, dynamic option management, and responsive UI for seamless user experience.",
    image: "/Project-1.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://decision-roulette-xi.vercel.app/",
    github: "https://github.com/Molik2913x/Decision-Roulette",
  },
  {
    title: "Quote Generator",
    description:
      "A dynamic quote generator that displays inspirational quotes with smooth transitions and interactive UI elements. Built with reusable components and clean state management for optimal performance.",
    image: "/Project-2.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://quote-generator-mb.vercel.app/",
    github: "https://github.com/Molik2913x/Quote-generator",
  },
  {
    title: "Price Demand Calculator",
    description:
      "A business simulation tool that visualizes the relationship between price, demand, revenue, and profit in real-time. Includes dynamic calculations and market simulation logic to demonstrate economic principles interactively.",
    image: "/Project-3.png",
    tags: ["React", "TypeScript", "Vite", "Chart.js", "Tailwind CSS"],
    link: "https://demand-price-main.vercel.app/",
    github: "https://github.com/Molik2913x/demand-price-main",
  },
  {
    title: "Interavtive personal Portfolio",
    description:
      "A modern, responsive personal portfolio built to showcase my projects, achievements, and technical skills.Designed with a focus on clean UI, smooth interactions, and reusable component architecture focusing on scalabily and flexibility ",
    image: "/Project-4.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Molik2913x",
    github: "https://github.com/Molik2913x",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative ">
      {/* Bg glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute top-1/7 -right-60 w-[600px] h-[1000px] 
      bg-[var(--color-primary)] opacity-30 rounded-full blur-[160px]" />
    
      <div className="absolute  bottom-32 -left-60 w-[500px] h-[700px] 
      bg-[var(--color-primary)] opacity-40 rounded-full blur-[150px]" />
     </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondaryForeground text-md font-bold tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondaryForeground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted hover:underline hover:text-foreground animate-fade-in transform-all duration-300 animate-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primaryForeground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primaryForeground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                    text-muted group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted italic hover:text-foreground transition-all duration-300 text-xs">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span                       
                      key={tagIdx}
                      className="px-4 py-1.5 font-md hover:font-semibold hover:-translate-y-2 hover:scale-110 rounded-full bg-surface text-xs border  border-border text-muted hover:border-primary hover:border hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animate-delay-500">
          <a href="https://github.com/Molik2913x">
            <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};