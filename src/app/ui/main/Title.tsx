import { links } from "@/app/data/links";
import { BsDot } from "react-icons/bs";

// NOTE: &apos; is the HTML entity for an apostrophe (used below)
// NOTE: &gt; is the HTML entity for an > (used below)

function SubTitle() {
  return (
    <div className="ml-8 font-jetbrains w-[43em] xl:w-[34em] m:w-[26em] s:w-[22em] xs:w-[18em] s:ml-0">
      <div className="bg-cream border-x-2 py-4 xs:py-2 pl-10 xl:pl-6 text-6xl xl:text-5xl m:text-4xl s:text-3xl xs:text-2xl overflow-hidden text-nowrap animate-width-grow">
        Software Engineer
      </div>
      <div className="flex justify-center items-center w-2/3 s:w-full text-3xl xl:text-2xl m:text-xl s:text-lg  px-1 bg-lemon">
        <span>FULL STACK</span>
        <BsDot />
        <span>WEB</span>
      </div>
      <div className="group">
        <div className="absolute cursor-pointer text-xl xl:text-base w-0 group-hover:w-44 xs:group-hover:w-32 group-hover:border-b-2 group-hover:bg-black/10 group-active:bg-white overflow-hidden text-nowrap transition-color duration-300">
          What I do --&gt;
        </div>
        <div className="cursor-pointer text-xl xl:text-base w-1/3 s:w-1/2">
          What I do --&gt;
        </div>
      </div>
    </div>
  );
}

export function Title() {
  return (
    <div className="mt-20 s:mt-24 xs:mt-20">
      <div className="text-5xl mb-16 xl:text-4xl m:text-3xl xs:text-2xl s:ml-4 xs:ml-2">
        <span> Hi, I&apos;m </span>
        <a target="_blank" href={links.LinkedIn} className="group ml-2">
          <span className="absolute border-b pl-5 xl:pl-4 m:pl-1 xs:pl-2 xxs:w-48">
            Shalon N. Ngigi
          </span>
          <span className="absolute overflow-hidden w-0 group-hover:w-96 xl:group-hover:w-72 m:group-hover:w-56 xs:group-hover:w-48 animate-pulse hover:animate-none pl-5 xl:pl-4 m:pl-1 xs:pl-2 transition-all duration-300 text-nowrap border-b bg-lemon">
            Shalon N. Ngigi
          </span>
        </a>
      </div>
      <SubTitle />
    </div>
  );
}

// TODO: add on click to show skills in modal
