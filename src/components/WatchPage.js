import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-10 dark:bg-neutral-950 dark:text-white">
      <div className="flex">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")+"?autoplay=0"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-xl w-[996px] h-[560px]"
        ></iframe>
        <LiveChat />

      </div>
      <CommentSection />
    </div>
  );
};

export default WatchPage;
