import React from "react";
import TypeAnimation from "react-type-animation";

export const Home = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center">
      <div className="mx-auto" style={{ width: "420px" }}>
        <p className="pb-4 text-6xl">Khai Tran</p>
        <TypeAnimation
          cursor={false}
          sequence={["Third Year Software Engineering Student"]}
          wrapper="p"
        />
        <TypeAnimation
          cursor={false}
          sequence={[2500, " at the University of Ottawa"]}
          wrapper="p"
        />
      </div>
    </div>
  );
};
