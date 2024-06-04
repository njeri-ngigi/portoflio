import { ReactNode } from "react";
import { FaGithubAlt, FaLinkedin, FaMoon } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { links } from "../data/links";

type IconProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

function Icon({ link, children }: IconProps) {
  return (
    <a href={link} target="_blank" className="cursor-pointer">
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

export const Twitter = () => (
  <Icon link={links.Twitter}>
    <FaSquareXTwitter size={25} title="Go to my Twitter page" />
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
