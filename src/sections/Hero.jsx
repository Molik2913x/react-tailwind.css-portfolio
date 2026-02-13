import { Button } from "@/Components/Button";
import {
  ArrowRight,ChevronDown,Github,Linkedin,Instagram,Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";

const skills = [
   "Java",
   "Python",
   "JavaScript",
   "Html5",
   "CSS3",
   "Bootstrap",
   "React",
   "Next.js",
   "Node.js",
   "Git & GitHub",
   "C & C++",
   "MySQL",
   "MongoDB",
   "Tailwind CSS",
   "TypeScript",
   "vercel",
   "AI Scripting",
]

export const Hero = () => {
   return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
         <img src="/hero_bg.jpg" 
         alt="bg" className="w-full h-full object-cover opacity-40 " />

         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/8080 to-background">
            
         </div>
      </div>

      {/* Green dotsss */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(30)].map((_,i) => (
         <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-70 blur-[0.5px] animate-pulse" 
            style={{
            backgroundColor:"var(--color-primary)",  
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${8 + Math.random() * 18}s 
            ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`
         }}/>
         ))}
      </div>


      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column TxT*/}
            <div className=" space-y-8">
               <div className="animate-fade-in ">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-2">
                     <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                     Software Engineer • React developer
                  </span>
               </div>
               {/* Headline */}
               <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animate-delay-200">
                     Crafting <span className="text-primary glow-hover glow-text">digital</span>
                     <br />
                     experiences with
                     <br />
                     <span className="font-serif italic font-normal text-white">
                        precision
                     </span>
                  </h1>
                  <p className="text-muted hover:text-foreground mt-4 max-w-lg animate-fade-in animate-delay-500">
                     Hi, I'm Molik Bhateja a software engineer who builds responsive, accessible, and performant web applications with modern
                     technologies like React , Next.js, and Tailwind CSS.
                  </p>
               </div>

               {/* CTAction */}
               <div className="flex flex-wrap gap-4  animate-fade-in animation-delay-300">
                  <a href="#contact">
                     <Button size="sm"  className=" hover:bg-secondaryForeground transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)] md:!px-6  md:!py-3 lg:!px-7 lg:!py-3.5">
                     Get in touch <ArrowRight className="w-5 h-5" />
                  </Button>
                  </a>
                  <a href="https://drive.google.com/file/d/1HaF8XXmdB8gVzfw8hu_0i4gvbq1bZc0r/view?usp=drive_link ">
                     <AnimatedBorderButton>
                  <Download className="w-5 h-5 " />
                     Download CV
                  </AnimatedBorderButton>
                  </a>

               </div>

               {/* Social Links */}
               <div className="flex  items-center gap-4 animate-fade-in animation-delay-400">
                  <span className="text-md text-muted">Follow me: </span>
                     {[
                     { icon: Github, href: "https://github.com/Molik2913x/" },
                     { icon: Linkedin, href: "https://www.linkedin.com/in/molik-bhateja-2913x/" },
                     { icon: Instagram, href: "https://www.instagram.com/molik.bhateja/" },
                     ].map((social, idx) => (
                     <a
                        key={idx}
                        href={social.href}
                        className="p-2 hover:scale-125 hover:-translate-y-2 rounded-full glass hover:bg-lowprimary hover:text-primary transition-all duration-300">
                        {<social.icon className="w-5 h-5" />}
                     </a>
                  ))}
               </div>
            </div>


            {/* Right column PfP*/}
            <div className="relative animate-fade-in animate-delay-300">
               {/* Profile Image */}
               <div className="relative max-w-sm mx-auto">
                  <div
                     className="absolute inset-0 
                        rounded-2xl bg-gradient-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10  animate-pulse"
                  />
                  <div className="relative glass rounded-2xl m-3 p-1 shadow-glow">
                     <img
                        src="/PFP.png"
                        alt="Molik's PFP"
                        className="w-full aspect-[4/5] object-cover rounded-2xl"
                     />

                     {/* Floating Badge */}
                     <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3  animate-float">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                           <span className="text-sm font-medium">
                              Available for work
                           </span>
                        </div>
                     </div>
                        {/* Stats Badge */}
                     <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                        <div className="text-2xl font-bold text-primary">5+</div>
                           <div className="text-xs text-muted">
                              Months Exp.
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Skills SEC */}
         <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted mb-6 hover:text-foreground hover:underline text-center">Technologies I worked With</p>
            <div className="relative overflow-hidden">

                  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

               <div className="flex gap-4 animate-scroll-left  white space-nowrap">
                  {[...skills,...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="flex-shrink-0 px-4 py-2 rounded-full glass text-sm text-muted ">
                     <span className="text-md font-serif font-semibold hover:text-primary transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

         {/* Scroll Indicator */}
      <div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 
                   animate-fade-in animation-delay-800"
         >
        <a href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

   </section>
};