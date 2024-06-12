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
    <FaLinkedin
      className="xs:hidden"
      size={25}
      title="Go to my LinkedIn profile"
    />
    <FaLinkedin
      className="hidden xs:block"
      size={20}
      title="Go to my LinkedIn profile"
    />
  </Icon>
);

export const GitHub = () => (
  <Icon link={links.GitHub}>
    <FaGithubAlt className="xs:hidden" size={25} title="Go to my Github page" />
    <FaGithubAlt
      className="hidden xs:block"
      size={20}
      title="Go to my Github page"
    />
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
  return (
    <a
      className="cursor-pointer transition-all duration-150 hover:translate-y-0.5"
      href="shalons-resume.pdf"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <RiDownload2Fill
        className="xs:hidden"
        size={25}
        title="Download my resume"
      />
      <RiDownload2Fill
        className="hidden xs:block"
        size={20}
        title="Download my resume"
      />
    </a>
  );
};
