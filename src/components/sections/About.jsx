import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backendSkills = [
    "JAVA",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Mongoose",
    "SQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            About Me{" "}
          </h2>

          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫Education </h3>
              <ul className="text-gray-300 list-disc list-inside space-y-4 text-sm">
                <li>
                  <strong>KLS Gogte Institute of Technology, Belagavi</strong>
                  <br />
                  B.E. in Computer Science and Engineering
                  <br />
                  <strong>CGPA: 8.20</strong> (Expected July 2025)
                </li>
                <li>
                  <strong>Shanthiniketan PU College, Dharwad</strong>
                  <br />
                  Pre-University | <strong>87.83%</strong> (July 2021)
                </li>
                <li>
                  <strong>
                    Janata Vidyalaya Composite Jr. College, Dandeli
                  </strong>
                  <br />
                  Primary and High School | <strong>90.24%</strong> (April 2019)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼Work Experience </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Infynow Software Solutions, Belagavi</strong>
                <br />
                Frontend Developer Intern | Sep 2024 - Jan 2025
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>
                  Developed and maintained features for Lakshmi Developers
                  website using HTML, CSS, JavaScript, and React.
                </li>
                <li>
                  Implemented responsive design principles for cross-device
                  compatibility.
                </li>
                <li>Collaborated with the team to enhance UI/UX.</li>
                <li>
                  Fixed bugs and optimized performance for stability and speed.
                </li>
                <li>Used Git for version control and collaboration.</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
