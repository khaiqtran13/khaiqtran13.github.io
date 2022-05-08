import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "./linkedin.png";
import GitHubIcon from "./github.png";
import resumeIcon from "./resume.png";

export const Home = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center">
      <div className="mx-auto" style={{ width: "690px" }}>
        <p className="pb-4 text-6xl">Khai Tran</p>
        <div style={{ width: "420px" }}>
          <TypeAnimation
            cursor={false}
            sequence={["Third Year Software Engineering Student"]}
            wrapper="p"
          />
        </div>
        <div style={{ width: "420px" }} className="pb-4">
          <TypeAnimation
            cursor={false}
            sequence={[2500, " at the University of Ottawa"]}
            wrapper="p"
          />
        </div>
        <div className="flex space-x-2">
          <a href="https://www.linkedin.com/in/khai-tran-9a2799196/" target="">
            <img src={LinkedInIcon} />
          </a>
          <a href="https://github.com/khaiqtran13" target="_blank">
            <img src={GitHubIcon} />
          </a>
          <a href="https:khaiqtran13.github.io/resume" target="_blank">
            <img src={resumeIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};
