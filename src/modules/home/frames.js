import FetchFrames from "@/components/fetchFrames";
import React from "react";
import { useSelector } from "react-redux";

const Frames = () => {
  const frames = useSelector((state) => state.frames.frames);
  return (
    <div className=" flex flex-col items-center justify-center mt-12 h-auto">
      <p className=" text-2xl font-semibold hover:underline cursor-pointer mb-12 ">
        Recent Frames
      </p>

      {/* Frames */}
      <FetchFrames data={frames?.slice(0, 3)} />
    </div>
  );
};

export default Frames;
