import React from "react";
import handleViewport from "react-in-viewport";
import { useSpring, animated, useTrail } from "react-spring";
export const Projects = () => {
    const viewportWidth = window.innerWidth;

    // add arrow emoji?
    const items = ["About Me", "Languages", "Technologies", "Projects"];
    const trailConfig = { mass: 10, tension: 2000, friction: 200 };

    //
    const [flip, setFlip] = React.useState(true);
    const props = useSpring({
        to: { transform: `translateX(${viewportWidth / 4}px)`, opacity: 1 },
        from: { transform: "translateX(0px)", opacity: 1 },
        reset: true,
        reverse: flip,
        // delay: 250,
        // onRest: () => setFlip(!flip),
    });

    //   block
    const [toggle, setToggle] = React.useState(false);

    const trail = useTrail(items.length, {
        trailConfig,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        from: { opacity: 0, height: -20 },
    });
    console.log("vp:", viewportWidth);
    const TrailingBlock = (props) => {
        const { forwardedRef } = props;
        return (
            <div className="flex" ref={forwardedRef}>
                <div>
                    {trail.map(({ x, ...rest }, index) => (
                        <animated.div
                            key={items[index]}
                            className="trails-text"
                            style={{
                                ...rest,
                                transform: x.to(
                                    (x) => `translate3d(0,${x}px, 0)`,
                                ),
                            }}
                        >
                            <animated.div className="bg-white rounded-md h-fit p-2 my-4 hover:shadow-xl hover:bg-slate-100 hover:text-indigo-600">
                                <div
                                    onClick={() => {
                                        setFlip(!flip);
                                    }}
                                >
                                    {items[index]}
                                </div>
                                {/* onclick shifts everything to the left and shows details on the right */}
                            </animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
        );
    };

    const ViewportBlockTrailing = handleViewport(TrailingBlock);

    return (
        <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="flex">
                    {/* {!flip && ( */}
                    <div className="p-4 bg-white rounded-lg shadow-lg h-96 m-4">
                        <p className="text-xl text-indigo-500">Title</p>
                        <p className="text-indigo-500">Title</p>
                    </div>
                    {/* )} */}
                    <div className="w-full">
                        <animated.div className="overflow-hidden" style={props}>
                            <ViewportBlockTrailing
                                onEnterViewport={() => setToggle(true)}
                                onLeaveViewport={() => setToggle(false)}
                            />
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
