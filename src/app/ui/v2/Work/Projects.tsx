import { links } from "@/app/data/links";

const projects = [
  {
    index: "project-1",
    title: "Sauti Pol",
    description: "A platform for elections, polls and surveys.",
    link: "https://github.com/njeri-ngigi/sauti-pol",
    stack: "TypeScript, NestJS, Node.js, React, PostgreSQL",
  },
  {
    index: "project-2",
    title: "Real time chat",
    description: "A real time chat frontend client",
    link: "https://github.com/njeri-ngigi/real-time-chat-react",
    stack: "JavaScript, React, Socket.io",
  },
  {
    index: "project-3",
    title: "Real time chat backend",
    description: "Real time chat backend server",
    link: "https://github.com/njeri-ngigi/real-time-chat-react",
    stack: "JavaScript, Node.js, Socket.io, MongoDB",
  },
  {
    index: "project-4",
    title: "A json editor",
    description: "Checks the diff between 2 JSON objects",
    link: "https://github.com/njeri-ngigi/json-editor",
    stack: "JavaScript, React",
  },
  {
    index: "project-5",
    title: "A Slack bot",
    description: "a slack bot that sets your out of office profile",
    link: "https://github.com/njeri-ngigi/slack-set-ooo-profile",
    stack: "JavaScript, Node.js, Slack API",
  },
];

export function Projects() {
  return (
    <div className="font-jetbrains">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">PROJECTS</h2>
      <div className="flex flex-wrap mt-4">
        {projects.map((project) => (
          <a key={project.index} href={project.link} target="_blank">
            <div className="w-[160px] xs:w-[320px] xs2:w-[290px] mx-auto h-[170px] xs:h-[120px] bg-purple1/10 dark:bg-black2 hover:bg-gray1 hover:dark:bg-orange1/70 transition-all duration-200 mr-3 mb-3 px-3 py-2 flex flex-col justify-between">
              <h3 className="text-base text-black1 dark:text-gray2">{project.title}</h3>
              <p className="text-black2 text-xs my-2 dark:text-gray1">{project.description}</p>
              <p className="text-black2 text-[10px] my-2 dark:text-gray1">{project.stack}</p>
            </div>
          </a>
        ))}
      </div>
      <a
        className="text-lg text-orange2 dark:text-orange1 hover:text-purple1 hover:dark:text-gray1 hover:underline transition-all duration-200"
        href={links.GitHub}
        target="_blank"
      >
        MORE ON GITHUB --&gt;
      </a>
    </div>
  );
}
