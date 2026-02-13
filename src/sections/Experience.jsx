const experiences = [
  {
    period: "2019 — 2020",
    role: "High School (CBSE)",
    company: "Darshan Academy, Meerut",
    description:
      "Completed secondary education with a focus on Science and Mathematics, building strong analytical and logical foundations. Achieved 70% overall and developed early interest in problem-solving and technology.",
    technologies: ["Science", "Mathematics"],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Senior Secondary (CBSE)",
    company: "Darshan Academy, Meerut",
    description:
      "Completed higher secondary education with subjects including Python, Commerce, and Mathematics. Scored 80% overall and strengthened programming fundamentals while developing structured thinking and analytical skills.",
    technologies: ["Python","SQL","Mathematics", "Commerce"],
    current: false,
  },
  {
    period: "Aug 2022 — June 2025",
    role: "Bachelor of Computer Applications (BCA)",
    company:
      "IIMT, Meerut (Affiliated to Chaudhary Charan Singh University)",
    description:
      "Graduated with 70%, gaining strong foundations in programming, databases, and software development. Learned Java, Python, C, C++, and version control with Git & GitHub. Actively participated in hackathons and built practical projects to strengthen real-world problem-solving skills.",
    technologies: ["Java", "Python", "C", "C++", "Git", "GitHub"],
    current: false,
  },
  {
    period: "July 2025 — November 2025",
    role: "Technical Resource Specialist",
    company: "FCS Software Solutions Pvt. Ltd., Noida",
    description:
      "Worked at a 35+ year established consultancy firm, where I leveraged SQL and MySQL for database searches and candidate sourcing. Developed strong skills in client servicing, time management, deadline handling, and cross-team collaboration while delivering consistent results under pressure.",
    technologies: ["SQL", "MySQL", "Client Servicing", "Time Management"],
    current: false,
  },
];


export const Experience = () => {
    return( <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/5 -right-60 w-[500px] h-[700px]
         bg-[var(--color-primary)] opacity-30 rounded-full blur-[160px]" 
        />
        
        <div className="absolute  bottom-32 -left-60 w-[500px] h-[700px] 
         bg-[var(--color-primary)] opacity-40 rounded-full blur-[150px]" 
        />
    

        <div className="container mx-auto  px-6 relative z-10">
            {/* section space */}
            <div className="max-w-3xl mx-auto text-center mb-32">
                <span className="text-secondaryForeground text-md font-bold tracking-wider uppercase animate-fade-in">Education & Expirence</span>
                <h2 className="text-3xl  md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondaryForeground">
                    Journey that <span className="font-serif italic font-normal text-white">
                        {" "}
                    builds career.</span>
                </h2>

                <p className="text-muted hover:underline hover:text-foreground transition-all duration-300 animate-fade-in animate-delay-200">
                    A timeline of my professional growth, from curious beginner to
                    a flexible team player who adapts to new tecchnologies very quickly
                    and want to work in projects that makes a change.
                </p>
            </div>

            {/* timeline */}
            <div className="relative">
                <div
                    className=" timeline-glow absolute left-0 md:left-1/2  top-0 bottom-0 w-[2px] md:-translate-x-1/2"
                    style={{
                        background: "linear-gradient(to bottom, var(--color-primary), var(--color-primary), transparent)",
                        boxShadow: `
                        0 0 15px rgba(32,178,166,0.8),
                        0 0 40px rgba(32,178,166,0.6),
                        0 0 80px rgba(32,178,166,0.4)
                        `,
                    }}
                />

                {/* Expirence and education */}
                <div className="space-y-12">
                    {experiences.map((exp , idx) =>(
                    <div
                        key={idx}
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                        >    
                          {/*Dot*/}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3.5 h-3.5 rounded-full bg-primary -translate-x-1.5 ring-4 ring-background ">  <span className=" absolute inset-0 rounded-full bg-primary opacity-7 animate-ping" />  </div>

                            {/* COntent */}
                        <div className={`pl-8 md:pl-0 ${ idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16" }`}>
                            <div className={`glass p-6  border border-halfprimary hover:border-[var(--color-primary)] transition-colors duration-500 rounded-3xl`}>
                                <span className="text-md text-primary font-medium italic">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className=" text-muted ">{exp.company}</p>
                                <p className="text-muted mt-4 ">{exp.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${idx%2 === 0 ? "md:justify-end" : ""}`}>
                                    {exp.technologies.map((tech,techIdx) => (
                                        <span key={techIdx} className="px-3 py-1 hover:-translate-y-3 hover:scale-105 text-xs bg-surface rounded-full border  border-border text-muted hover:border-halfprimary hover:border hover:text-white transition-all duration-300 ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};