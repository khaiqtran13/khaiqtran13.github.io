import React from "react";
import handleViewport from "react-in-viewport";
import { useSpring, animated, useTrail } from "react-spring";
export const Projects = () => {
  const items = ["Item1", "Item2", "Item3", "Item4"];
  const config = { mass: 5, tension: 2000, friction: 200 };

  //   block
  const [toggle, setToggle] = React.useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const TrailingBlock = (props) => {
    const { inViewport, forwardedRef } = props;

    return (
      <div
        ref={forwardedRef}
        //    onClick={() => setToggle((state) => !state)}
      >
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    );
  };

  const Block = (props) => {
    const { inViewport, forwardedRef } = props;
    const color = inViewport ? "#217ac0" : "#ff9800";
    const text = inViewport ? "In viewport" : "Not in viewport";
    return (
      <div className="viewport-block" ref={forwardedRef}>
        <h3>{text}</h3>
        <div style={{ width: "400px", height: "300px", background: color }} />
      </div>
    );
  };
  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

  const LanguagesBlock = (props) => {
    const { inViewport, forwardedRef } = props;
    const languageProps = useSpring({
      opacity: inViewport ? 1 : 0,
      marginTop: inViewport ? 0 : -500,
    });
    return (
      <animated.div
        style={languageProps}
        className="text-white text-lg mx-4"
        ref={forwardedRef}
      >
        {/* {inViewport && console.log("inViewport")} */}
        TypeScript / JavaScript, Python, Java, C, C#, HTML, CSS
      </animated.div>
    );
  };

  const ViewportBlockLanguages = handleViewport(
    LanguagesBlock /** options: {}, config: {} **/
  );

  const ViewportBlockTrailing = handleViewport(TrailingBlock);

  const [greetingStatus, displayGreeting] = React.useState(false);

  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500,
  });

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center">
      <div className="mx-auto lg:w-96">
        {/* <p className="text-2xl mx-2 font-semibold">Languages:</p>
                <ViewportBlockLanguages />
                <p className="text-2xl mx-2 font-semibold pt-8">
                    Technologies:
                </p>
                <ViewportBlockTech /> */}
        {/* <button
          className="bg-white p-4 text-lg rounded-lg shadow-lg"
          onClick={() => displayGreeting((a) => !a)}
        >
          Click Here
        </button>
        {!greetingStatus ? (
          <div className="text-white bg-black rounded-lg text-lg shadow-lg p-4">
            Look Here
          </div>
        ) : (
          <animated.div
            className="text-white bg-black rounded-lg text-lg shadow-lg p-4"
            style={contentProps}
          >
            React Shpring
          </animated.div>
        )} */}
        <div className="w-20 h-20 bg-white rounded-lg">
          {/* <ViewportBlockLanguages /> */}
          {/* {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))} */}
          {/* <ViewportBlockTrailing
            onEnter={console.log("entered")}
            onLeaveViewport={console.log("left")}
          /> */}
        </div>
        <ViewportBlock
          onEnterViewport={() => console.log("enter")}
          onLeaveViewport={() => console.log("leave")}
        />
      </div>
    </div>
  );
};
