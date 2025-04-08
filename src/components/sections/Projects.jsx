import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  ">
              <h3 className="text-xl font-bold mb-2">
                QuiGit - Redefining the Quiz Culture
              </h3>
              <p className="text-gray-400 mb-4">
                A real-time quiz web application developed for our college,
                providing an engaging platform for interactive learning and
                assessment. Bridging the gap between traditional and modern quiz
                methodologies, offering a seamless and efficient digital
                environment for students and educators.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Material UI", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href=" https://game-app-ee3ee.web.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  ">
              <h3 className="text-xl font-bold mb-2">
                Lakshmi-Developers Website
              </h3>
              <p className="text-gray-400 mb-4">
                Developed the frontend of a modern and responsive website for
                Lakshmi Developers, showcasing their real estate and
                construction services. Focused on clean UI, smooth user
                experience, and highlighting the company’s brand
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="//lakshmidevelopers.co.in/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  ">
              <h3 className="text-xl font-bold mb-2">Omnifood Website</h3>
              <p className="text-gray-400 mb-4">
                A responsive site built as part of a Udemy course to strengthen
                frontend styling and layout skills. Showcases clean UI design,
                intuitive structure, and modern visual elements
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href=" https://omnifood-nevercookagain-rohitbhat07.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  ">
              <h3 className="text-xl font-bold mb-2">
                Rukmini Balika Nilaya Dandeli
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a user-friendly website for Rukmini Balika Nilaya
                Dandeli, showcasing the Ashram's mission and programs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href=" https://balikanilaya-rohit07.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  ">
            <h3 className="text-xl font-bold mb-2">
              Rukmini Balika Nilaya Dandeli
            </h3>
            <p className="text-gray-400 mb-4">
              Developed a user-friendly website for Rukmini Balika Nilaya
              Dandeli, showcasing the Ashram's mission and programs.
            </p>
            <div>
              {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href=" https://balikanilaya-rohit07.netlify.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➡️
              </a>
            </div>
          </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
