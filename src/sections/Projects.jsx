import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "CampusBid",
    description:
      "A full-stack web application that enables users to create auction listings, place bids in real time, and manage ongoing auctions. The platform provides a seamless and interactive bidding experience while ensuring efficient data management and user authentication.",
    image: "/projects/campusbid.png",
    tags: ["React", "MongoDb", "Express.js", "Node.js", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Moodify",
    description:
      "A personalized music recommendation platform that suggests songs and playlists based on user preferences and moods. The application leverages external APIs to deliver tailored recommendations through an intuitive and user-friendly interface.",
    image: "/projects/moodify.png",
    tags: ["Python", "Machine Learning", "Streamlit", "Pandas"],
    link: "#",
    github: "#",
  },
  {
    title: "Wanderlust",
    description:
      "A travel and accommodation booking platform inspired by modern vacation rental services. Users can explore destinations, view property listings, and manage bookings through a responsive and engaging interface.",
    image: "/projects/wanderlust.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif font-normal italic text-white">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from web application to innovative
            tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              key={idx}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`Project-${idx + 1}`}
                  className="w-full h-full object-cover transition-transoform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-0 "
                  >
                    <ArrowUpRight />
                  </a>
                  <a
                    href={project.github}
                    className="p-4 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-0"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      key={tagIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA's */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
