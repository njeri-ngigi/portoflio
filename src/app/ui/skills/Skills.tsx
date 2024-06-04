import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { SkillItem } from "./SkillItem";
import { Skill, skills } from "@/app/data/skills";

export function Skills() {
  const [selected, setSelected] = useState<Skill>(Skill.None);

  const onSkillSelect = (skill: Skill) => {
    if (selected === skill) {
      setSelected(Skill.None);
    } else {
      setSelected(skill);
    }
  };

  return (
    <div className="w-1/3 flex items-center text-3xl">
      <div className="self-start text-xl mt-7 flex flex-row items-center ml-auto mr-4 cursor-pointer hover:border-b">
        <span>Download my resume</span>
        <FiDownload size={20} className="ml-2" />
      </div>
      <div className="absolute border-2 border-black p-4 h-[75vh] bg-lemon right-3 w-1/4" />
      <div className="absolute border-2 border-black p-4 h-[80vh] bg-cream right-0 w-1/4">
        <div className="flex flex-col justify-center h-full p-3">
          <div className="my-2 flex flex-row items-center">What I do</div>
          {skills.map((skill) => (
            <SkillItem
              key={skill.skill}
              skill={skill}
              isSelected={selected === skill.skill}
              onSelected={onSkillSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
