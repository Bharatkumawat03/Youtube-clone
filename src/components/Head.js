import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  GOOGLE_API_KEY,
  SEARCH_RESULT_API,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("api call -  "+ searchQuery)
    if (!searchQuery) return;
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // const getSearchResult = async () => {
  //   const data = await fetch(SEARCH_RESULT_API + searchQuery);
  //   const json = await data.json();
  //   console.log("here");
  //   console.log(json.items);
  // };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const toggleThemeMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  // const navigate = useNavigate();

  return (
    <div className="flex p-2 px-6 justify-between items-center sticky top-0 bg-white dark:text-white dark:bg-neutral-950  z-10 w-full  ">
      <div className="flex">
        <div
          onClick={() => toggleMenuHandler()}
          className="pr-4 dark:fill-white  flex items-center"
        >
          <RxHamburgerMenu className="h-8 w-8 m-2 p-1 cursor-pointer rounded-full hover:bg-gray-200 " />
        </div>

        {/* <Link to="/">  */}
        <div className="flex items-center hover:cursor-pointer">
          <a href="/" className="flex items-center">
            <img
              className="h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            />
            {/* <FaYoutube className="h-8 w-8 fill-red-500"/>  */}
            <h1 className="font-bold text-xl font-sans pl-1">YouTube</h1>
          </a>
        </div>
          {/* </Link> */}
      </div>

      <div>
        <div
          // onSubmit={(e) =>{ e.preventDefault()
          // getSearchResult(e)}}
          className="flex "
        >
          <input
            type="text"
            placeholder="Search"
            className="border rounded-s-3xl w-[500px] dark:border-gray-800 dark:bg-neutral-950 px-5 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {true && (
            // <Link to={`results/?search=${searchQuery}`}>
            <button
              // onClick={() => navigate(`/results/?search=${searchQuery}`)}
              className="border rounded-e-3xl px-5 py-1 dark:border-gray-800 dark:bg-neutral-950 dark:fill-white bg-gray-200 "
            >
              <BiSearch />
            </button>
            // </Link>
          )}
        </div>
        {showSuggestions && (
          <div className="bg-white dark:bg-neutral-950 w-[500px] rounded-2xl shadow-md  fixed mt-2">
            <ul>
              {suggestions.map((s) => (
                <li
                onMouseDown={() => setSearchQuery(s)}
                  key={s}
                  className="hover:bg-gray-200 flex px-5 py-1 items-center cursor-pointer"
                >
                  <BiSearch className="me-2 " />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <button onClick={toggleDarkMode} className="p-2  ">
          {darkMode ? "Light mode" : "Dark Mode"}
        </button>
        <img
          className="h-6 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPxL6lXr65ThjleDtvcTqDpQ5reliT122q8j5YuQY6g&s"
        />
      </div>
    </div>
  );
};

export default Head;
