import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "./linkedin.png";
import GitHubIcon from "./github.png";
import resumeIcon from "./resume.png";
import styled, { keyframes } from "styled-components";
import { bounce, flip } from "react-animations";
import ArrowDown from "./arrow-down.png";
export const Home = () => {
  const bounceAnimation = keyframes`${bounce}`;
  const animation = keyframes`${flip}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
    animation-delay: 4s;
  `;

  const PulseDiv = styled.div`
    animation: 5s ${animation};
    animation-iteration-count: infinite;
    animation-delay: 5s;
  `;
  const viewportHeight = window.innerHeight;

  return (
    <div className="relative flex justify-center flex-col h-screen bg-black">
      <div className="md:w-[65%] mx-auto h-16">
        {/* <div className="absolute top-1/3 left-4 md:left-1/4 mx-auto h-16"> */}
        <p className="pb-6 text-6xl">Khai Tran</p>
        <div className="h-20">
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={["Fourth Year Software Engineering Student"]}
            />
          </div>
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[2500, " at the University of Ottawa"]}
            />
          </div>
        </div>
        <BouncyDiv className="flex space-x-2">
          <a
            href="https://www.linkedin.com/in/khai-tran-9a2799196/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} />
          </a>
          <a
            href="https://github.com/khaiqtran13"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubIcon} />
          </a>
          <a
            href="https://drive.google.com/file/d/1Qlgh-HP76wLMyazJWPcixmpm9gqpM205/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={resumeIcon} alt={"resume"} />
          </a>
        </BouncyDiv>
      </div>
      <div className="absolute bottom-5 flex justify-center w-full">
        <PulseDiv
          className="flex flex-col justify-center"
          onClick={() => {
            window.scrollBy(0, viewportHeight);
          }}
          // use react-scroller
        >
          {/* <p className="text-sm">about me</p> */}
          <img src={ArrowDown} className="h-16" alt={"arrow down"} />
        </PulseDiv>
      </div>
    </div>
  );
};
