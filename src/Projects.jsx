import React from "react";
import handleViewport from "react-in-viewport";
import { useSpring, animated, useTrail, useTransition } from "react-spring";
export const Projects = () => {
    // add arrow emoji?
    const items = ["About Me", "Languages", "Technologies", "Projects"];
    const config = { mass: 10, tension: 2000, friction: 200 };

    //   block
    const [toggle, setToggle] = React.useState(false);
    const [toggleLeft, setToggleLeft] = React.useState(false);

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        from: { opacity: 0, height: -20 },
        transform: toggleLeft ? "translateX(25px)" : "",
    });

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
                            <animated.div
                                className="bg-white rounded-md h-fit p-2 my-4 hover:shadow-xl hover:bg-slate-100 hover:scale-125 hover:text-indigo-600"
                                style={{
                                    transform: toggleLeft
                                        ? "translateX(-100px)"
                                        : "",
                                }}
                            >
                                <div
                                    onClick={() => {
                                        setToggleLeft(!toggleLeft);
                                        console.log(toggleLeft);
                                    }}
                                >
                                    {items[index]}
                                </div>
                                {/* onclick shifts everything to the left and shows details on the right */}
                            </animated.div>
                        </animated.div>
                    ))}
                </div>
                {toggleLeft && <div className="bg-white h-10 w-10"></div>}
            </div>
        );
    };

    const ViewportBlockTrailing = handleViewport(TrailingBlock);

    return (
        <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center">
            <div className="mx-auto lg:w-96">
                <ViewportBlockTrailing
                    onEnterViewport={() => setToggle(true)}
                    onLeaveViewport={() => setToggle(false)}
                />
            </div>
        </div>
    );
};
