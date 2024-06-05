import { SkillSet } from "@/app/data/skills";

type SkillItemProps = {
  skill: SkillSet;
};

export function SkillItem({ skill }: SkillItemProps) {
  const skillSet = skill.skillSet.join(", ");

  return (
    <>
      <div className="border-b my-3 ">{skill.skill}</div>
      <div className={"pl-4 text-xl flex flex-wrap"}>
        <div className="p-1 capitalize">{skillSet}</div>
      </div>
    </>
  );
}
