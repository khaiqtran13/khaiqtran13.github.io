import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "./linkedin.png";
import GitHubIcon from "./github.png";
import resumeIcon from "./resume.png";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

export const Home = () => {
  const bounceAnimation = keyframes`${bounce}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
    animation-delay: 4s;
  `;

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
        <BouncyDiv className="flex space-x-2">
          <a href="https://www.linkedin.com/in/khai-tran-9a2799196/" target="">
            <img src={LinkedInIcon} />
          </a>
          <a href="https://github.com/khaiqtran13" target="_blank">
            <img src={GitHubIcon} />
          </a>
          <a
            href="https://drive.google.com/file/d/1JVSY2eKG4zkF7jIOGt2gpNzNMwIqRooj/view?usp=sharing"
            target="_blank"
          >
            <img src={resumeIcon} />
          </a>
        </BouncyDiv>
      </div>
    </div>
  );
};
