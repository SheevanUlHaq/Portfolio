import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

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
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight font-bold text-secondary-foreground animate-fade-in animation-delay-100">
              Building the future,{" "}
              <span className="text-white font-serif font-normal  italic">
                {" "}
                one component at a time.
              </span>
            </h2>

            {/* About Me */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I'm Sheevan Ul Haq, a passionate and dedicated computer
                science enthusiast with a strong interest in technology,
                problem-solving, and software development. I enjoy learning new
                concepts, exploring emerging technologies, and applying my
                knowledge to build practical and meaningful solutions. My
                curiosity and commitment to continuous improvement drive me to
                take on challenges and grow both personally and professionally.
              </p>
              <p>
                With a solid foundation in programming, data structures,
                algorithms, databases, and web technologies, I am always eager
                to expand my knowledge and take on new challenges. Whether it's
                developing applications, learning a new framework, or solving
                complex coding problems, I approach every opportunity with
                dedication, persistence, and a growth mindset.
              </p>
              <p>
                Beyond academics, I am a curious learner who enjoys exploring
                emerging technologies and taking on new challenges. I believe in
                continuous growth, adaptability, and lifelong learning. My goal
                is to leverage my technical knowledge and creativity to develop
                impactful software solutions while contributing effectively to
                innovative teams and projects.
              </p>
            </div>

            {/* Mission glass */}
            <div className="glass rounded-2xl p-6 glow-border animae-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to learn relentlessly, build thoughtfully, and
                leverage technology to create innovative solutions that solve
                real-world problems. I strive to continuously improve my skills,
                embrace new challenges, and contribute to meaningful projects
                that create value for users and communities alike.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                className="glass p-6 rounded-2xl animate-fade-in"
                key={idx}
                style={{ animationDelay: `${100 + (idx + 1) * 100}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex justify-center items-center mb-4 hover:bg-primary/20">
                  {<item.icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
