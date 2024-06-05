export enum Skill {
  None = "NONE",
  Frontend = "FRONTEND",
  Backend = "BACKEND",
  DevOps = "DEVOPS",
}

export type SkillSet = {
  skill: Skill;
  skillSet: string[];
};

export const skills: SkillSet[] = [
  {
    skill: Skill.Frontend,
    skillSet: ["React", "Redux", "TypeScript", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    skill: Skill.Backend,
    skillSet: ["Golang", "Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    skill: Skill.DevOps,
    skillSet: ["Docker", "Kubernetes", "Jenkins", "AWS"],
  },
];
