import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAws,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaGoogle,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAzuredevops,
  SiCypress,
  SiExpress,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiPlaywright,
  SiTestcafe,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const icons = [
  {
    name: "React",
    Icon: FaReact,
  },
  {
    name: "Redux",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    Icon: TbBrandTypescript,
  },
  {
    name: "CSS",
    Icon: IoLogoCss3,
  },
  {
    name: "Tailwind",
    Icon: RiTailwindCssFill,
  },
  {
    name: "Bootstrap",
    Icon: FaBootstrap,
  },
  {
    name: "Golang",
    Icon: FaGolang,
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
  },
  {
    name: "Express",
    Icon: SiExpress,
  },
  {
    name: "NestJS",
    Icon: SiNestjs,
  },
  {
    name: "PostgreSQL",
    Icon: BiLogoPostgresql,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    name: "Jest",
    Icon: SiJest,
  },
  {
    name: "TestCafe",
    Icon: SiTestcafe,
  },
  {
    name: "Cypress",
    Icon: SiCypress,
  },
  {
    name: "Playwright",
    Icon: SiPlaywright,
  },
  {
    name: "Git",
    Icon: FaGitAlt,
  },
  {
    name: "Docker",
    Icon: FaDocker,
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
  },
  {
    name: "GCP",
    Icon: FaGoogle,
  },
  {
    name: "AWS",
    Icon: FaAws,
  },
  {
    name: "Azure",
    Icon: SiAzuredevops,
  },
];

export function Skills() {
  return (
    <div className="font-jetbrains mt-16 lg:mt-8 ml-16 m:ml-8 s:ml-4 xs:ml-2">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">SKILLS</h2>
      <div className="flex text-black2 text-sm mt-4 flex-wrap">
        {icons.map(({ name, Icon }, index) => (
          <p
            key={index}
            className={`border border-black2 text-black2 dark:text-gray1 rounded-full px-2 flex items-center py-0.5 mr-4 mb-4`}
          >
            <span className="ml-1">{name}</span>
            <Icon className="ml-1" />
          </p>
        ))}
      </div>
    </div>
  );
}
