import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [ 
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
    
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="absolute top-1 left-1 w-96 h-96 bg-halfprimary rounded-full blur-3xl" />
        <div className="absolute bottom-1 right-1 w-64 h-64 bg-halfprimary  rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left coloumn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondaryForeground text-sm font-medium tracking-wider uppercase">About me</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondaryForeground">
                        A coder by day,
                        <br />
                        <span className="font-serif italic font-normal text-white"> problem-solver by night.</span>
                    </h2>
                    {/* paragraphs */}
                    <div className="space-y-4 text-muted animate-fade-in animate-delay-200">
                        <p>
                            I’m a detail-oriented software developer with a strong foundation in Java,
                            data structures, and modern frontend development. My journey into tech started
                            with curiosity about how digital systems work, and it has grown into a passion
                            for building applications that are efficient, user-focused, and reliable.
                        </p>

                        <p>
                            I enjoy working at the intersection of logic and design—developing responsive
                            web interfaces using React and modern UI frameworks, while applying solid
                            problem-solving principles behind the scenes. Through hands-on projects and
                            real-world experience, I’ve learned how clean code, performance, and usability
                            come together to create impactful software.
                        </p>

                        <p>
                            Beyond development, I value continuous learning and adaptability. Whether it’s
                            improving workflows with smarter tools, strengthening my DSA skills, or
                            collaborating across teams, I believe growth comes from consistency,
                            curiosity, and a willingness to take ownership of challenges.
                        </p>    
                    </div>
                    {/* Mission */}

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                       <p className="text-md font-medium italic text-foreground ">
                          "My aim is to build software that is thoughtful, efficient, and dependable —
                           solutions that solve real problems, scale with purpose, and reflect care in
                           both design and execution."</p> 
                    </div>
                    
                </div>
                {/* right column */}
                <div className="grid sm:grid-cols-2 gap-6">
                     {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-5 rounded-2xl border-none animate-fade-in transition-all duration-500 hover:-translate-y-4 hover:glass-strong hover:-translate-x-4 hover:shadow-[0_0_20px_var(--color-half-primary)] " 
                        style={{ animationDelay: `${(idx+1) * 200}ms`}}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 hover:glass-strong transition-colors duration-300 bg-lowprimary hover:bg-halfprimary hover:text-primary">
                                <item.icon className="w-6 h-6 " />
                            </div>
                            <h3 className="text-lg hover:text-primary font-semibold mb-2">{item.title}</h3>
                            <p className="text-xs hover:text-halfprimary text-muted">{item.description}</p>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    </section>
};