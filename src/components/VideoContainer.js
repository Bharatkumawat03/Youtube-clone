import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useVideos from '../utils/useVideos';

const VideoContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
//    const [videos] = useVideos(YOUTUBE_VIDEOS_API);
const [videos, setVideos] = useState([]);
useEffect(() => {
    getVideos();
},[]); 

const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);

};

  return (
    <div className={` grid pt-8 dark:text-white dark:bg-neutral-950 ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'}`}
    // {'flex  grid grid-cols-3   pt-8 dark:text-white dark:bg-neutral-950'+(!isMenuOpen && "grid-cols-4")}
     >
        {videos.map(video => 
            <Link to={"/watch?v=" + video.id} >
                <VideoCard key={video.id} info={video}/> 
            </Link>
            )}
        {/* <VideoCard info={videos[0]} /> */}
      
    </div>
  );
};

export default VideoContainer;
