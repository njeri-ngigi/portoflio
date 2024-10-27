import { Bio } from "./Bio";
import { Skills } from "./Skills";

export function About() {
  return (
    <div className="w-7/12 pr-2 lg:w-full min-w-[320px]">
      <Bio />
      <Skills />
    </div>
  );
}
