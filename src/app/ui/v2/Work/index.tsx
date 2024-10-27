import { Blog } from "./Blog";
import { Projects } from "./Projects";

export function Work() {
  return (
    <div className="m:hidden w-5/12 lg:w-full ml-16 m:ml-8 s:ml-4 xs:ml-2 lg:mt-8 min-w-[320px]">
      <Projects />
      <Blog />
    </div>
  );
}
