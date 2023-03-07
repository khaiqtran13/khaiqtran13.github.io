import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "./linkedin.png";
import GitHubIcon from "./github.png";
import resumeIcon from "./resume.png";
import styled, { keyframes } from "styled-components";
import { fadeIn, bounceInRight, fadeInLeft } from "react-animations";
import HsbarMin from "react-horizontal-stacked-bar-chart";
export const Home = () => {
  const animation = keyframes`${fadeIn}`;

  const logoAnimation = keyframes`to {opacity: 1}${bounceInRight}`;

  const languageAnimation = keyframes`to {opacity: 1}${fadeInLeft}`;

  const LanguageDiv = styled.div`
    animation: 2s ${languageAnimation};
    animation-delay: 7.75s;
    animation-fill-mode: forwards;
    opacity: 0;
  `;

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
      <div className="md:w-[65%] lg:w-[40%] mx-auto absolute top-60">
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
        <LanguageDiv className="mt-4">
          <p className="text-indigo-200 mb-4">Languages</p>
          <div className="rounded-md h-content overflow-hidden md:font-semibold">
            <HsbarMin
              showTextIn
              data={[
                {
                  description: "Javascript",
                  value: 80,
                  color: "rgb(11, 16, 115)",
                },
                { description: "Python", value: 40, color: "rgb(67, 195, 97)" },
                {
                  description: "HTML/CSS",
                  value: 60,
                  color: "rgb(110, 57, 195)",
                },
                { description: "C++", value: 20, color: "rgb(195, 57, 57)" },
              ]}
            />
          </div>
        </LanguageDiv>
      </div>
    </div>
  );
};
