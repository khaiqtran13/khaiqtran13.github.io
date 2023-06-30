import { motion } from "framer-motion";
import React from "react";
import { bounceInRight, fadeIn } from "react-animations";
import TypeAnimation from "react-type-animation";
import styled, { keyframes } from "styled-components";
import GitHubIcon from "./github.png";
import LinkedInIcon from "./linkedin.png";
import resumeIcon from "./resume.png";

export const Home = () => {
  const [showText, setShowText] = React.useState(true);

  const handleHover = () => {
    setShowText(false);
  };

  const handleHoverEnd = () => {
    setShowText(true);
  };
  const animation = keyframes`${fadeIn}`;

  const logoAnimation = keyframes`to {opacity: 1}${bounceInRight}`;

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

        <div className="">
          <a
            href="https://www.covermyshifts.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            style={{ textDecoration: "none", border: "none" }}
          >
            <motion.div
              className="w-[150px] h-[150px] rounded-3xl flex items-center justify-center transition-colors duration-700 ease-in-out mt-8 border-2 border-dashed border-rose-500  p-2"
              style={{
                backgroundColor: "var(--bg-color)",
                "--bg-color": "black",
              }}
              whileHover={{
                "--bg-color": "white",
                scale: [1, 1.6, 1.2],
                rotate: [0, 360],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                color: "#fff",
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              onHoverStart={handleHover}
              onHoverEnd={handleHoverEnd}
            >
              {showText ? (
                <p className="text-lg leading-tight py-5 tracking-tight font-light text-center text-gray-400">
                  come see what i'm working on
                </p>
              ) : (
                <p className="text-2xl leading-tight py-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
                  CoverMe
                </p>
              )}
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

/* <LanguageDiv className="mt-4">
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
        </LanguageDiv> */

// const languageAnimation = keyframes`to {opacity: 1}${fadeInLeft}`;

// const LanguageDiv = styled.div`
//   animation: 2s ${languageAnimation};
//   animation-delay: 7.75s;
//   animation-fill-mode: forwards;
//   opacity: 0;
// `;
