import { FiDownload } from "react-icons/fi";
import { SkillItem } from "./SkillItem";
import { skills } from "@/app/data/skills";

export function Skills() {
  return (
    <div className="flex items-center text-3xl font-jura">
      <div className="group self-start text-2xl test-forest mt-7 flex flex-row items-center ml-auto mr-4 cursor-pointer active:bg-white">
        <span>Download my resume</span>
        <FiDownload size={20} className="ml-2 group-hover:animate-bounce" />
        <span className="absolute flex items-center overflow-hidden w-0 group-hover:w-[15.5rem] transition-all duration-300 border-b text-nowrap">
          Download my resume
        </span>
      </div>
      <div className="absolute border-2 border-black p-4 h-[75vh] bg-lemon right-3 w-[375px]" />
      <div className="absolute border-2 border-black p-4 h-[80vh] bg-cream right-0 w-[375px]">
        <div className="flex flex-col justify-center h-full p-3">
          <div className="my-2 flex flex-row items-center font-bold text-4xl">
            What I do
          </div>
          {skills.map((skill) => (
            <SkillItem key={skill.skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
