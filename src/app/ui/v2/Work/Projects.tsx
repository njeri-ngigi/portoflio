import { links } from "@/app/data/links";

const projects = [
  {
    index: "project-0",
    title: "Playhouse",
    description: "A react web app for games",
    link: "https://github.com/njeri-ngigi/playhouse",
    stack: "React, Next.js, Tailwind CSS",
  },
  {
    index: "project-1",
    title: "Raceday",
    description: "A react native mobile app for race day management",
    link: "https://github.com/njeri-ngigi/raceday-mobile",
    stack: "React Native, Expo",
  },
  {
    index: "project-2",
    title: "Sauti pol",
    description: "A frontend and backend server for voting and polling",
    link: "https://github.com/njeri-ngigi/sauti-pol",
    stack: "React, TypeScript, Next.js, NestJS, Node.JS, PostgreSQL",
  },
  {
    index: "project-3",
    title: "Real time chat",
    description: "A real time chat frontend client",
    link: "https://github.com/njeri-ngigi/real-time-chat-react",
    stack: "JavaScript, React, Socket.io",
  },
  {
    index: "project-4",
    title: "Real time chat backend",
    description: "Real time chat backend server",
    link: "https://github.com/njeri-ngigi/real-time-chat",
    stack: "JavaScript, Node.js, Socket.io, MongoDB",
  },
  {
    index: "project-5",
    title: "A slack bot",
    description: "A slack bot that sets your out of office profile",
    link: "https://github.com/njeri-ngigi/slack-set-ooo-profile",
    stack: "JavaScript, Node.js, Slack API",
  },
];

export function Projects() {
  return (
    <div className="font-jetbrains lg:w-11/12 flex flex-col lg:items-center">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">
        PROJECTS
      </h2>
      <div className="flex flex-wrap mt-2 lg:justify-center max-w-[650px]">
        {projects.map((project) => (
          <a key={project.index} href={project.link} target="_blank">
            <div className="w-[160px] xs:w-[320px] xs2:w-[290px] mx-auto h-[165px] xs:h-[100px] bg-purple1/10 dark:bg-black2 hover:bg-gray1 hover:dark:bg-orange1/70 transition-all duration-200 xs:mr-0 mr-3 mb-3 px-3 py-2 xs:py-1 flex flex-col justify-between xs:justify-evenly">
              <h3 className="text-base text-black1 dark:text-gray2">
                {project.title}
              </h3>
              <p className="text-black2 text-xs xs:text-[11px] my-2 xs:my-0 dark:text-gray1 xs:truncate">
                {project.description}
              </p>
              <p className="text-black2 text-[10px] my-2 xs:my-0 dark:text-gray1">
                {project.stack}
              </p>
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
