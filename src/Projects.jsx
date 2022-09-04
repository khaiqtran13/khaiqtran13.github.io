import React from "react";
import { FaLink, FaCode } from "react-icons/fa";

export const Projects = () => {
  const Card = ({ title, subtitle, link, repo, tech }) => (
    <div className="justify-between glass p-3 m-2 md:w-[690px] h-[210px]">
      <div className="ml-5 mr-2 grid grid-cols-6 h-full">
        <div className="flex flex-col col-span-5">
          <h3 className="mt-2 text-white text-3xl font-semibold">{title}</h3>
          <p className="mt-1 text-white text-sm text-light">{subtitle}</p>
        </div>
        <div className="flex flex-col justify-center h-full">
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
        <div>
          <p className="text-sm text-light">{tech}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
      <div className="flex flex-wrap max-w-3/4 justify-center h-fit">
        <Card
          title="CoverMe"
          tech="Rea"
          link="https://shift-replacement-finder.herokuapp.com/"
          subtitle="In a single intuitive mobile app, easily post, cover, and keep track of your shifts.
        SRF is an app that helps employees find and keep track of replacements.
        Employees can easily post, cover and browse shifts within your corporation.
        Admins can view replacements and have access to management privileges."
        />
        <Card
          title="Krypt"
          link="https://khaiqtran13-krypt.netlify.app/"
          repo="https://github.com/khaiqtran13/krypt"
        />
        <Card
          title="OnBoardPlus"
          repo="https://github.com/jakekellett/GNG-2101-Onboard"
        />
        <Card
          title="Zombie Runner"
          repo="https://github.com/kana2001/Zombie-Runner"
          link="https://simmer.io/@kana2001/zombie-runner"
        />
      </div>
    </div>
  );
};
