import { Button } from "@/Components/Button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href : "#about", label: "About" },
    { href : "#projects", label: "Projects" },
    { href : "#experience", label: "Experience" },
    { href : "#achievements", label: "Achievements" },
    
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

 
    
    // Handle scroll to change navbar background
    return( 
        <header className={`fixed w-full top-0 left-0 z-50 right-0 transition-all duration-300
                         ${isScrolled ? "glass-strong py-1" : "bg-transparent py-3"} `}>
            <nav className="container mx-auto py-1 px-1 flex items-center justify-between">
                <a href="#" 
                    className="text-xl ml-1.5 font-bold tracking-tight hover:text-primary">
                    MB<span className="text-primary">.</span>
                </a>

                {/* Dekstop nav */}
                <div className="pl-16 ml-10 hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-4 py-2 flex items-center gap-1">
                        {navLinks.map((link , index) => (
                            <a key={index} href={link.href} 
                            className="px-4 py-2 hover:scale-105 text-sm text-muted-foreground hover:text-foreground hover:bg-lowprimary hover:shadow-sm rounded-full transition-all duration-300">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div> 

                {/* contact */}
                <a href="#contact">
                    <div className="hidden  md:block">
                         <Button href="#contact" className="duration-300 mr-3 hover:bg-primary hover:scale-110 hover:shadow-[0_0_20px_var(--color-primary)]
                         " size="sm">Contact Me</Button>
                    </div>
                </a> 

                {/* for mobile */}
                <button onClick={() => setIsMobileMenuOpen( (prev) => !prev  )} 
                className="md:hidden p-1.5 hover:bg-surface rounded-md mr-1 focus:outline-none">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                
            </nav>

            {/* mobile menu */}
            {(isMobileMenuOpen) && (
                <div className="md:hidden glass-strong animate-fade-in-out">
                 <div className="container mx-auto px-7 py-6 flex flex-col gap-4">
                    {navLinks.map((link , index) => (
                            <a key={index} href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg text-muted hover:text-foreground hover:scale-110 hover:bg-lowprimary rounded-md px-4 py-2 transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}

                    <a href="#contact">
                        <Button onClick={() => setIsMobileMenuOpen( (prev) => !prev  )} size="sm">Contact Me</Button>
                    </a>
                </div>

                </div>
            )}
        </header>
    )
};