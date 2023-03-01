import React from "react";
import { FaLink, FaCode } from "react-icons/fa";

export const Projects = () => {
  const UIPill = ({ title }) => {
    return (
      <div className="glass rounded-full text-white w-fit px-2 m-1 border-0">
        {title}
      </div>
    );
  };

  const Card = ({ title, subtitle, link, repo, tech }) => (
    <div>
      <div className="justify-between glass p-3 m-3 md:mx-0 md:h-[210px] h-[320px] shadow-2xl">
        <div className="ml-5 mr-2 grid grid-cols-6 h-full">
          <div className="flex flex-col md:col-span-5 col-span-full mr-4">
            <h3 className="mt-2 text-white text-3xl font-semibold">{title}</h3>
            <p className="mt-1 text-white text-sm text-light">{subtitle}</p>
          </div>
          <div className="flex flex-col justify-center h-full md:col-span-1 col-span-2">
            <div className="flex md:justify-center">
              <div className="flex">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit hover:scale-150 mr-2"
                  >
                    <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-150 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                      <FaLink />
                    </button>
                  </a>
                )}
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit hover:scale-125"
                  >
                    <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-150 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                      <FaCode />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <p className="text-sm text-light">{tech}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const lang = [
    "TypeScript / JavaScript",
    "Python",
    "Java",
    "C",
    "SQL",
    "Solidity",
    "HTML",
    "CSS",
  ];

  const tech = [
    "React",
    "Redux",
    "Node.js",
    "Django",
    "Tailwind CSS",
    "Git",
    "Gatsby",
    "Figma",
    "Segment",
    "Firebase",
    "Docker",
    "Netlify",
    "Apollo GraphQL",
    "Postman",
  ];

  return (
    <div className="flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
      <div className="md:max-w-[65%] mx-auto">
        <p className="pb-6 text-6xl mx-auto mt-4 text-center">Projects</p>
        <div className="flex flex-wrap max-w-3/4 justify-center h-fit">
          <Card
            title="CoverMe"
            tech="React, Node, Express, MongoDB, Typescript, Heroku"
            link="https://shift-replacement-finder.herokuapp.com/"
            subtitle="
        SRF is an app that helps employees find and keep track of replacements.
        Employees can easily post, cover and browse shifts within your corporation.
        Admins can view replacements and have access to management privileges."
          />
          <Card
            title="Krypt"
            subtitle="A web3 application connected to the Ethereum blockchain that connects users' wallets using MetaMask.
            Users can send ETH to other wallets (on the Georli test network) with the interactions of smart contracts written in Solidity."
            link="https://khaiqtran13-krypt.netlify.app/"
            repo="https://github.com/khaiqtran13/krypt"
            tech="React, Javascript, Solidity, Web3, Metamask, Netlify, Alchemy"
          />
          <Card
            title="OnBoardPlus"
            subtitle="Onboard is an onscreen keyboard useful for everybody that cannot use a
            hardware keyboard. OnBoardPlus is a forked version of OnBoard with emphasis 
            on usability for mobility impaired users"
            repo="https://github.com/jakekellett/GNG-2101-Onboard"
            tech="Python, Linux"
          />
          <Card
            title="Zombie Runner"
            subtitle="3D video game created in Unity using C# scripting. This video game was created as an introduction to game development and object-oriented programming concepts.
          The game has two levels: a maze running level and a zombie fighting level - give it a try 😀"
            tech="Unity, C#"
            repo="https://github.com/kana2001/Zombie-Runner"
            link="https://simmer.io/@kana2001/zombie-runner"
          />
        </div>
        <div className="m-3 md:mx-0">
          <p className="pb-6 text-6xl mx-auto mt-4 text-center">Skills</p>
          <div>
            <div className="glass2 rounded-lg p-2 my-3">
              <div className="mx-2 flex flex-wrap">
                <p className="font-semibold">Languages:</p>
                <div className="flex flex-wrap">
                  {lang.map((title) => {
                    return <UIPill title={title} key={title} />;
                  })}
                </div>
              </div>
            </div>
            <div className="glass2 rounded-lg p-2 my-3">
              <div className="mx-2 flex flex-wrap">
                <p className="font-semibold">Technologies:</p>
                <div className="flex flex-wrap">
                  {tech.map((title) => {
                    return <UIPill title={title} key={title} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
