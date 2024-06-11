import { links } from "@/app/data/links";
import { BsDot } from "react-icons/bs";

// NOTE: &apos; is the HTML entity for an apostrophe (used below)
// NOTE: &gt; is the HTML entity for an > (used below)

function SubTitle() {
  return (
    <div className="ml-8 font-jetbrains w-[43em] xl:w-[34em]">
      <div className="bg-cream border-x-2 py-4 pl-10 xl:pl-6 text-6xl xl:text-5xl overflow-hidden text-nowrap animate-width-grow">
        Software Engineer
      </div>
      <div className="flex justify-center items-center w-2/3 text-3xl xl:text-2xl px-1 bg-lemon">
        <span>FULL STACK</span>
        <BsDot />
        <span>WEB</span>
      </div>
      <div className="group">
        <div className="absolute cursor-pointer text-xl xl:text-base w-0 group-hover:w-44 group-hover:border-b-2 group-hover:bg-black/10 group-active:bg-white overflow-hidden text-nowrap transition-color duration-300">
          What I do --&gt;
        </div>
        <div className="cursor-pointer text-xl xl:text-base w-1/3">
          What I do --&gt;
        </div>
      </div>
    </div>
  );
}

export function Title() {
  return (
    <div className="mt-20">
      <div className="text-5xl mb-16 xl:text-4xl">
        <span> Hi, I&apos;m </span>
        <a target="_blank" href={links.LinkedIn} className="group ml-2">
          <span className="absolute border-b pl-5 xl:pl-4">
            Shalon N. Ngigi
          </span>
          <span className="absolute overflow-hidden w-0 group-hover:w-96 xl:group-hover:w-72 animate-pulse hover:animate-none pl-5 xl:pl-4 transition-all duration-300 text-nowrap border-b bg-lemon">
            Shalon N. Ngigi
          </span>
        </a>
      </div>
      <SubTitle />
    </div>
  );
}

// TODO: add on click to show skills in modal
