import { LayoutGridDemo } from "@/components/layoutGridDemo";
import FetchFrames from "@/components/fetchFrames";
import { getAllFrames } from "@/firebase/functions";
import { setFrames } from "@/redux/slices/frameSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Trendy = () => {
  const frames = useSelector((state) => state.frames.frames);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllFrames().then((frame) => dispatch(setFrames(frame)));
  }, []);
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <div className="w-[45%]">
        <LayoutGridDemo />
      </div>
      <FetchFrames data={frames?.slice(0, 1)} purpose="show" />
    </div>
  );
};

export default Trendy;
