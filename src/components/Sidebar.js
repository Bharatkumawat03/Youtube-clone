import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CATEGORIES_API } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  },[]); 
  const getCategories = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    // console.log(json);
    // setVideos(json.items);

};

  if (!isMenuOpen) return null;
  return (
    <div className="w-1/6 md: fixed h-screen  left-0 dark:text-white bg-white dark:bg-neutral-950 pt-4 hover:overflow-y-auto">
      <div className="border-b-2 p-4">
        <h1>
          <Link to="/"> Home</Link>
        </h1>
        <h1><Link to="/"> Shorts</Link></h1>
        <h1>Subscriptions</h1>
      </div>
      <div className="p-4">
        <h1 className="font-semibold">Explore</h1>
        <ul className="">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
