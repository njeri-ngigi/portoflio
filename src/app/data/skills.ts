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
    skillSet: ["React", "Redux", "TypeScript", "Tailwind CSS"],
  },
  {
    skill: Skill.Backend,
    skillSet: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    skill: Skill.DevOps,
    skillSet: ["Docker", "Kubernetes", "Jenkins", "AWS"],
  },
];

// TODO:
// - font
// - responsive design
// - download resume
// - send mail functionality
// - add wave svg to contact form
// - add tooltips
// - animations
// - dark mode
