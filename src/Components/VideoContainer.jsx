import { useEffect, useState } from "react";
// import { data } from "react-router";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";
// import js from "@eslint/js";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {videos.map((video) => (
        // eslint-disable-next-line react/jsx-key
        <Link key={video?.id} to={"/watch?v=" + video?.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
