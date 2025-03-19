/* eslint-disable react/prop-types */



const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-1 rounded-lg w-68 shadow-lg h-[330px]">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold p-2">{title}</li>
        <li className="pl-2">{channelTitle}</li>
        <li className="pl-2">{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
