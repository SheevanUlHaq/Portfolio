import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-0 items-center">
          {/* Logo */}
          <div className="md:justify-self-start">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              SH<span className="text-primary">.</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>

            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>

            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5 md:justify-end">
            <a
              href="https://github.com/SheevanUlHaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sheevanulhaq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/sheevan_ul_haq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sheevan UI Haq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
