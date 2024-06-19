export enum Skill {
  None = "NONE",
  Frontend = "FRONTEND",
  Backend = "BACKEND",
  DevOps = "DEVOPS",
  Cloud = "CLOUD",
  Testing = "TESTING",
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
    skillSet: ["Golang", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    skill: Skill.Testing,
    skillSet: ["Jest", "TestCafe", "Cypress", "Playwright"],
  },
  {
    skill: Skill.DevOps,
    skillSet: ["Git", "Docker", "Kubernetes"],
  },
  {
    skill: Skill.Cloud,
    skillSet: ["GCP Tracing, Monitors and Logs"],
  },
];
