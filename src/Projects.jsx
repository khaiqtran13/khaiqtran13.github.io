import React from "react";
import { Random } from "react-animated-text";
import handleViewport from "react-in-viewport";

export const Projects = () => {
    const LanguagesBlock = (props) => {
        const { forwardedRef } = props;

        return (
            <div className="text-white text-lg mx-4" ref={forwardedRef}>
                <Random
                    text={
                        "TypeScript / JavaScript, Python, Java, C, C#, HTML, CSS"
                    }
                    effect="verticalFadeIn"
                    effectChange={4}
                    effectDirection="down"
                    iterations={1}
                />
            </div>
        );
    };

    const TechBlock = (props) => {
        const { forwardedRef } = props;

        return (
            <div
                className="text-white text-lg mx-4 flex-wrwap"
                ref={forwardedRef}
            >
                <Random
                    text={
                        "Git, Linux, Gatsby, Tailwind CSS, Segment, Figma, React, Microsoft Applications, Android Studio, Storybook, Pardot, Bootstrap, Jira, Postman, Lighthouse, Computer Hardware"
                    }
                    effect="verticalFadeIn"
                    effectChange={4}
                    effectDirection="down"
                    iterations={1}
                />
            </div>
        );
    };

    const ViewportBlockLanguages = handleViewport(
        LanguagesBlock /** options: {}, config: {} **/,
    );

    const ViewportBlockTech = handleViewport(
        TechBlock /** options: {}, config: {} **/,
    );

    return (
        <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center">
            <div className="mx-auto lg:w-96">
                <p className="text-2xl mx-2 font-semibold">Languages:</p>
                <ViewportBlockLanguages />
                <p className="text-2xl mx-2 font-semibold pt-8">
                    Technologies:
                </p>
                <ViewportBlockTech />
            </div>
        </div>
    );
};
