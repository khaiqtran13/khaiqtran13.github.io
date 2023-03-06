import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "./linkedin.png";
import GitHubIcon from "./github.png";
import resumeIcon from "./resume.png";
import styled, { keyframes } from "styled-components";
import { fadeIn, bounceInRight } from "react-animations";
export const Home = () => {
  const animation = keyframes`${fadeIn}`;

  const logoAnimation = keyframes`to {opacity: 1}${bounceInRight}`;

  // const PulseDiv = styled.div`
  //   animation: 5s ${animation};
  //   animation-iteration-count: infinite;
  //   animation-delay: 5s;
  // `;

  const TitleDiv = styled.div`
    animation: 2.5s ${animation};
  `;

  const LinkedInDiv = styled.div`
    animation: 2s ${logoAnimation};
    animation-delay: 4s;
    opacity: 0;
    animation-fill-mode: forwards;
  `;

  const GitHubDiv = styled.div`
    opacity: 0;
    animation: 2s ${logoAnimation};
    animation-delay: 5.25s;
    animation-fill-mode: forwards;
  `;

  const ResumeDiv = styled.div`
    opacity: 0;
    animation: 2s ${logoAnimation};
    animation-delay: 6.5s;
    animation-fill-mode: forwards;
  `;

  return (
    <div className="relative flex justify-center h-screen bg-black">
      <div className="md:w-[65%] mx-auto absolute top-60">
        <p className="text-sm text-indigo-200 mb-4">
          Hey, welcome to my website. I'm
        </p>
        <TitleDiv>
          <p className="pb-6 text-6xl">Khai Tran</p>
        </TitleDiv>
        <div className="h-20">
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[1000, "An upcoming SWE Graduate"]}
            />
          </div>
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[2500, "at the University of Ottawa"]}
            />
          </div>
        </div>
        <div className="flex">
          <LinkedInDiv>
            <a
              href="https://www.linkedin.com/in/khai-tran-9a2799196/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedInIcon" />
            </a>
          </LinkedInDiv>
          <GitHubDiv>
            <a
              href="https://github.com/khaiqtran13"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubIcon} alt="GitHubIcon" />
            </a>
          </GitHubDiv>
          <ResumeDiv>
            <a
              href="https://drive.google.com/file/d/1IQcspui7uIMADVUh7w0NEuuanb5FQrKC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={resumeIcon} alt={"resume"} />
            </a>
          </ResumeDiv>
        </div>
      </div>
      <div className="absolute bottom-5 flex justify-center w-full">
        {/* <PulseDiv
          className="flex flex-col justify-center"
          onClick={() => {
            window.scrollBy(0, viewportHeight);
          }}
          // use react-scroller
        >
          <img src={ArrowDown} className="h-16" alt={"arrow down"} />
        </PulseDiv> */}
      </div>
    </div>
  );
};
