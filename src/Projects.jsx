import React from "react";
import { FaLink, FaCode } from "react-icons/fa";

export const Projects = () => {
  const Card = ({ title, subtitle, link, repo, tech }) => (
    <div className="justify-between glass p-3 m-2 md:w-[690px] md:h-[210px] h-[320px]">
      <div className="ml-5 mr-2 grid grid-cols-6 h-full">
        <div className="flex flex-col md:col-span-5 col-span-full">
          <h3 className="mt-2 text-white text-3xl font-semibold">{title}</h3>
          <p className="mt-1 text-white text-sm text-light">{subtitle}</p>
        </div>
        <div className="flex flex-col justify-center h-full md:col-span-1 col-span-2">
          <div className="space-x-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-fit hover:scale-150"
              >
                <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-150">
                  <FaLink />
                </button>
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="w-fit  hover:scale-125"
              >
                <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-150">
                  <FaCode />
                </button>
              </a>
            )}
          </div>
        </div>
        <div className="col-span-full">
          <p className="text-sm text-light">{tech}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
      <div className="flex flex-wrap max-w-3/4 justify-center h-fit">
        <Card
          title="CoverMe"
          tech="React, Node, Express, MongoDB, Typescript, Heroku"
          link="https://shift-replacement-finder.herokuapp.com/"
          subtitle="In a single intuitive mobile app, easily post, cover, and keep track of your shifts.
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
    </div>
  );
};
