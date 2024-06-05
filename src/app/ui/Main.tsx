import { BsDot } from "react-icons/bs";
import { ContactButton } from "../components";
import { links } from "../data/links";

// NOTE: &apos; is the HTML entity for an apostrophe (used below)

type MainProps = {
  onOpenContactModal: () => void;
};

export function Main(props: MainProps) {
  return (
    <>
      <div className="flex flex-col justify-between font-jura basis-3/5">
        <div className="mt-40 h-2/3">
          <div className="mb-8 text-4xl">
            Hi, I&apos;m{" "}
            <a target="_blank" href={links.LinkedIn} className="group ml-2">
              <span className="absolute border-b">Shalon N. Ngigi</span>
              <span className="absolute overflow-hidden w-0 group-hover:w-64 transition-all duration-300 text-nowrap border-b bg-lemon ">
                Shalon N. Ngigi
              </span>
            </a>
          </div>
          <div className="ml-8 font-jetbrains w-[35em]">
            <div className="bg-white border-x-2 py-4 pl-10 text-5xl overflow-hidden text-nowrap animate-width-grow">
              Software Engineer
            </div>
            <div className="flex justify-center items-center w-2/3 text-2xl px-1 bg-lemon">
              <span>FULL STACK</span>
              <BsDot />
              <span>WEB</span>
            </div>
          </div>
          <div className="ml-20 text-3xl mt-32">
            I love working with amazing <br /> people to build intuitive <br />
            products
          </div>
        </div>
        <div className="h-1/3 flex items-end">
          <ContactButton onClick={props.onOpenContactModal} />
        </div>
      </div>
    </>
  );
}
