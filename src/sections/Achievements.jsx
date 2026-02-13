import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    subtitle: "Frontend-dev - College Hackathon",
    description:
      "Led frontend development in a team-based hackathon to build a responsive college education platform with testimonial integration. Secured 2nd position among multiple competing teams.",
    image: "https://plus.unsplash.com/premium_vector-1726439684413-b629680cf21f?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", 
    tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
  },
  {
    subtitle: "IIMT — Inter-College Skating Competition",
    description:
      "Won 1st prize in an inter-college skating competition, competing against participants from five institutions.A wonderfull day that taught me the value of discipline for wining in life",
    image: "https://images.unsplash.com/photo-1547447546-526c3f7462aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Leadership", "Discipline", "Competitive Spirit"],
  },
  {
    subtitle: "Certified in Java & Frontend Development",
    description:
      "Earned professional certifications in Java Programming and Frontend Development. Strengthened core programming concepts, object-oriented principles, and modern UI development practices.",
    image: "https://plus.unsplash.com/premium_vector-1720939039468-8e71e7e80fd6?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    tags: ["Java", "Frontend", "OOP"],
  },
  {
    subtitle: "Problem Solving Enthusiast",
    description:
      "Actively practice data structures and algorithms to improve analytical thinking and solution optimization. Focused on writing efficient, clean solutions and strengthening logical foundations for technical interviews.",
    image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
    tags: ["DSA", "Algorithms", "Optimization"],
  },
  {
    subtitle: "FCS~Technical Resource Specialist",
    description:
      "Placed in established consultancy firm through campus recruitment. Worked on understanding client requirements, retrieving structured candidate data using SQL, and delivering results within strict deadlines while collaborating across teams.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlyZWR8ZW58MHx8MHx8fDA%3D",
    tags: ["SQL", "Client Handling", "Time Management"],
  },
];

export const Achievements = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % achievements.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <section id="achievements" className="py-32 relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 -right-60 w-[500px] h-[500px] bg-halfprimary rounded-full blur-[180px]" />
        <div className="absolute bottom-0 -left-60 w-[500px] h-[500px] bg-halfprimary rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondaryForeground text-sm font-semibold tracking-wider uppercase">
            Achievements
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-secondaryForeground">
            Milestones that {" "}
            <span className="font-serif italic font-normal text-white">
             Shaped my journey.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
            <div className="relative">
                {/* Main Testimonial */}
                <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
                    <div className="absolute -top-3 left-8 w-10 h-10 rounded-full bg-halfprimary flex justify-center items-center">
                        {/* Quote */}<Quote className="w-6 h-6 text-primaryForeground"/>
                    </div>

                    <blockquote className="text-md md:text-xl font-medium leading-relaxed mb-8 pt-4">"{achievements[activeIdx].description}"</blockquote>

                    <div className="flex items-center gap-4">
                        <img src={achievements[activeIdx].image} alt="img" className="w-12 h-12 rounded-full object-cover ring-2 ring-halfprimary hover:glow-border "/>
                        <div className="">
                            <div className="font-semibold hover:text-primary text-md text-primaryForeground">{achievements[activeIdx].subtitle}</div>
                            <div className="flex mt-2 gap-2 flex-wrap opacity-90 text-xs">
                                {achievements[activeIdx].tags.map((tag, index) => (
                                    <span key={index} className=" border rounded-3xl px-3 py-1 hover:-translate-y-2 hover:scale-110 border-border text-muted hover:border-primary hover:border hover:text-white transition-all duration-300 ">
                                    {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-3 rounded-full glass hover:bg-halfprimary transition-all duration-300"
              onClick={previous}
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {achievements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 hover:color-primary rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-halfprimary transition-all duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

