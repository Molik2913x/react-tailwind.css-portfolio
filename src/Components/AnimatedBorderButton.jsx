import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ children }) => {
  return (
    <button
      className="
        relative group rounded-full overflow-visible
        text-foreground bg-transparent border border-border
        hover:border-primary/60 transition-colors duration-300

        /* 🔹 SIZE SYSTEM (PRO WAY) */
        px-5 py-2.5 text-sm
        sm:px-6 sm:py-3 sm:text-base
        lg:px-7 lg:py-3.5 lg:text-base
      "
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 30,1 
            A 29,29 0 0 0 1,30 
            A 29,29 0 0 0 30,59 
            L 170,59 
            A 29,29 0 0 0 199,30 
            A 29,29 0 0 0 170,1 
            Z
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary animate-border-path"
        />
      </svg>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
