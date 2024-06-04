import { GitHub, LinkedIn, ThemeIcon, Twitter } from "../components";

export function Sidebar() {
  return (
    <div className="flex flex-col items-center h-full p-5 ml-4">
      <div className="flex flex-col h-2/5 justify-evenly">
        <ThemeIcon />
        <LinkedIn />
        <GitHub />
        <Twitter />
      </div>
      <div className="h-3/5 border-1.5 border-black border-l w-0 my-8" />
    </div>
  );
}
