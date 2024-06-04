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
      <div className="flex flex-col justify-between w-2/3 pl-24">
        <div className="mt-40 h-2/3">
          <div className="mb-8 text-4xl font-inter">
            Hi, I&apos;m{" "}
            <a target="_blank" href={links.LinkedIn} className="underline">
              Shalon N. Ngigi
            </a>
          </div>
          <div className="flex ml-8">
            <div className="bg-forest text-white py-1 px-2 text-center mr-2 text-5xl">
              Software Engineer
            </div>
            <div className="flex items-center text-2xl text-forest">
              <span>FULL STACK</span>
              <BsDot />
              <span>WEB</span>
            </div>
          </div>
          <div className="ml-20 text-3xl mt-32 font-jura">
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
