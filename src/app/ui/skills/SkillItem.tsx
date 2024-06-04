import { IoIosArrowRoundForward } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi2";
import { Skill, SkillSet } from "@/app/data/skills";

type SkillItemProps = {
  skill: SkillSet;
  isSelected: boolean;
  onSelected: (s: Skill) => void;
};

export function SkillItem({ skill, isSelected, onSelected }: SkillItemProps) {
  return (
    <>
      <div
        className="border-b my-3 flex flex-row items-center cursor-pointer"
        onClick={() => onSelected(skill.skill)}
      >
        <span className="mr-2">{skill.skill}</span>
        {isSelected ? (
          <HiChevronDown size={30} />
        ) : (
          <IoIosArrowRoundForward size={40} />
        )}
      </div>
      {isSelected && (
        <div className="pl-4 text-xl">
          {skill.skillSet.map((s) => (
            <div className="mr-2 p-1 uppercase" key={s}>
              {s}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
