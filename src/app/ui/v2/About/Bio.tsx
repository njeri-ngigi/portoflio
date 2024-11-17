import { links } from "@/app/data/links";
import classNames from "classnames";
import Image from "next/image";
import { AnchorHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward, MdOutlineEmail } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";

export function Bio() {
  return (
    <div>
      <div className="flex items-center flex-col text-black1 mt-8 dark:text-gray1">
        <h1 className="self-start ml-16 m:ml-8 s:ml-4 font-orbitron text-2xl s:text-xl xs:text-lg mb-4">
          <code>&#8212;</code>
          <code>&#8212;</code>
          <code>&#8212;</code>
          <span className="pl-4">Hello,</span>
        </h1>
        <h1 className="font-orbitron">
          <span className="pl-4 text-3xl s:text-2xl xs:text-xl">
            I&apos;m Shalon N. Ngigi
          </span>
        </h1>
        <h2 className="font-nunito font-thin text-2xl s:text-xl xs:text-lg mt-2">
          a Software Engineer
        </h2>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="w-[150px] h-[150px] rounded-full">
          <Image
            className="rounded-full "
            src="/profile.png"
            alt="Shalon's Profile Photo"
            width={150}
            height={150}
            loading="lazy"
          />
        </div>
        <p className="bg-purple1/10 dark:bg-purple1 dark:text-white font-jetbrains text-xs s:text-[10px] px-2 py-1 mt-4 text-center">
          Status: building cool stuff
        </p>
      </div>
      <div className="text-orange2 dark:text-orange1 flex m:flex-col m:items-center justify-center flex-wrap font-jetbrains font-light mt-8">
        <Link
          href={`mailto:${links.Email}?subject=RE: Shalon's Portfolio&body=Hi Shalon, `}
          text="Say Hello"
          Icon={MdOutlineEmail}
        />
        <Link href={links.LinkedIn} text="LinkedIn" Icon={FaLinkedin} />
        <Link
          href={links.Resume}
          rel="noopener noreferrer"
          download
          text="My resume"
          Icon={RiDownload2Fill}
          title="Download my resume"
          hideLink
        />
        <Link
          href={links.GitHub}
          text="GitHub"
          Icon={FaGithub}
          className="hidden m:flex"
        />
        <Link
          href={links.Hashnode}
          text="Hashnode"
          Icon={SiHashnode}
          className="hidden m:flex"
        />
      </div>
    </div>
  );
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  Icon: IconType;
  hideLink?: boolean;
}

function Link({
  href,
  text,
  Icon,
  className,
  hideLink,
  ...otherProps
}: LinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        "flex items-center m:mb-4 mb-2 mx-4 s:mx-2 hover:text-purple1 dark:hover:text-gray1 hover:underline hover:cursor-pointer transition-all duration-200",
        className
      )}
      target="_blank"
      {...otherProps}
    >
      <Icon className="mr-2" /> {text}{" "}
      <MdArrowOutward
        size={10}
        className={classNames("ml-0.5 m:hidden", hideLink && "hidden")}
      />
    </a>
  );
}
