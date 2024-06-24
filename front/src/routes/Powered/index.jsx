import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub, FaSquareGitlab } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

function Powered() {
  const developers = [
    {
      name: "Eduardo Abba",
      stack: "Full Stack Web Developer",
      linkedin: "https://www.linkedin.com/in/katya-anco/",
      github: "https://github.com/katy089",
      // web: "https://",
    },
    
  ];

  return (
    <main className="flex flex-row justify-center px-4 mt-5">
      <section className="max-w-[1000px]">
        <h2 className="text-[45px] mb-4">Web Developer</h2>

        <h3 className="text-[24px] mb-5"></h3>
        <div className="flex flex-wrap -mx-4">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 px-4 mb-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="border rounded-lg p-4 bg-white hover:bg-gray-200">
                <h4 className="text-lg font-semibold">
                  {developer.name} - {developer.stack}
                </h4>
                <div className="flex items-center gap-5 mt-2">
                  <a
                    href={developer.linkedin}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin className="text-[35px]" />
                  </a>
                  {developer.github && (
                    <a
                      href={developer.github}
                      className="text-gray-800 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="text-[40px]" />
                    </a>
                  )}
                  {developer.gitlab && (
                    <a
                      href={developer.gitlab}
                      className="text-yellow-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGitlab className="text-[40px]" />
                    </a>
                  )}
                  {developer.web && (
                    <a
                      href={developer.web}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbWorldWww className="text-[40px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Powered;
