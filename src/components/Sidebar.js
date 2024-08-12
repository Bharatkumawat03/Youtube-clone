import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CATEGORIES_API } from "../utils/constants";

import {
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  TrendingIcon,
  ShoppingIcon,
  MusicIcon,
  MoviesIcon,
  LiveIcon,
  GamingIcon,
  NewsIcon,
} from '../utils/icons';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    // console.log(json);
    // setVideos(json.items);
  };

  if (!isMenuOpen) return null;
  return (
    <div className="w-1/6 md: fixed h-screen  left-0 dark:text-white bg-white dark:bg-neutral-950 pt-4 hover:overflow-y-auto">
      <div className=" px-4">
        <ul>
          <li className="mb-1">
            <Link
              to={"/"}
              className="flex items-center p-2 dark:text-white  rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-800"
            >
              <HomeIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <ShortsIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Shorts</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <SubscriptionsIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Subscriptions</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-700 my-4"></div>
      <div className="px-4">
        {/* <div className="border-t border-gray-700 my-4"></div> */}

        <h2 className="px-2 mb-2 text-lg  font-semibold text-gray-800 dark:text-gray-400">
          Explore
        </h2>
        <ul>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <TrendingIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Trending</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <ShoppingIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Shopping</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <MusicIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Music</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <MoviesIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Movies</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <LiveIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Live</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <GamingIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>Gaming</span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 dark:text-white rounded-lg hover:bg-gray-200  dark:hover:bg-neutral-800"
            >
              <NewsIcon className="w-5 h-5 mr-3 fill-black dark:fill-white" />
              <span>News</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
