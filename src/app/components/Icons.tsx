import { ReactNode } from "react";
import { FaGithubAlt, FaLinkedin, FaMoon } from "react-icons/fa";
import { links } from "../data/links";
import { RiDownload2Fill } from "react-icons/ri";

type IconProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

function Icon({ link, children }: IconProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer transition-all duration-150 hover:translate-y-0.5"
    >
      {children}
    </a>
  );
}

export const LinkedIn = () => (
  <Icon link={links.LinkedIn}>
    <FaLinkedin size={25} title="Go to my LinkedIn profile" />
  </Icon>
);

export const GitHub = () => (
  <Icon link={links.GitHub}>
    <FaGithubAlt size={25} title="Go to my Github page" />
  </Icon>
);

export const ThemeIcon = () => {
  const handleClick = () => {
    console.log("Toggle theme");
  };

  return (
    <button onClick={handleClick}>
      <FaMoon size={25} title="Turn on dark mode" />
    </button>
  );
};

export const DownloadResumeIcon = () => {
  const handleClick = () => {
    console.log("Download resume");
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer transition-all duration-150 hover:translate-y-0.5"
    >
      <RiDownload2Fill size={25} title="Download my resume" />
    </button>
  );
};
