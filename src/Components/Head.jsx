// import React from "react";
import {
  FaSearch,
  FaMicrophone,
  FaVideo,
  FaBell,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [suggetion, setSuggetion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggetion, setShowSUgetion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggetion(searchCache[searchQuery]);
      } else {
        makeSearchAPiCall();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const makeSearchAPiCall = async () => {
    // console.log("API GOT CALLED" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggetion(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col pt-2 shadow-md">
      <div className="flex col-span-1 ">
        <img
          className="h-12 cursor-pointer ml-4"
          alt="hamMenu"
          onClick={() => toggelMenuHandler()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-20 w-32 -mt-2 -ml-2"
            src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 ml-28  ">
        <div className="ml-8 mt-2">
          <div className="flex">
            <input
              className="h-11 p-3 w-[37rem] border border-gray-400 rounded-l-full "
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSUgetion(true)}
              onBlur={() => setShowSUgetion(false)}
            ></input>
            <button className="h-11 border border-l-0 border-gray-400 rounded-r-full p-3 ">
              <FaSearch className="text-black " />
            </button>
            <button className="p-3 ml-4 bg-gray-100 rounded-full">
              <FaMicrophone className="text-black text-[20px]" />
            </button>
          </div>

          {showSuggetion && (
            <div className="bg-white absolute py-2  w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggetion.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex items-center mt-2">
        <FaVideo className="text-xl cursor-pointer mx-8 text-[20px]" />
        <FaBell className="text-xl cursor-pointe text-[20px]" />
          <img
            className="h-11 ml-8 -mr-4"
            alt="logo"
            src="https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
