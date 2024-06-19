import { MainProps } from "./types";

export function Navigation(props: MainProps) {
  return (
    <div
      role="navigation"
      className="flex border-y mt-[60px] pl-[70px] font-jura uppercase text-2xl ml:text-xl m:hidden bg-cream"
    >
      <button
        onClick={props.onOpenContactModal}
        className="uppercase ml-10 cursor-pointer active:bg-cream active:text-night hover:bg-white border-x px-[12px] py-[8px] font-extrabold"
      >
        Contact me
      </button>
      <button
        role="button"
        onClick={props.onOpenSkillsModal}
        className="uppercase cursor-pointer active:bg-cream active:text-night hover:bg-white border-r px-[12px] py-[8px] font-extrabold"
      >
        My skills
      </button>
      <a
        className="cursor-pointer active:bg-cream active:text-night hover:bg-white border-r px-[12px] py-[8px] font-extrabold"
        href="shalons-resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        Download My Resume
      </a>
    </div>
  );
}
