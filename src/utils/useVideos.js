import React, { useEffect, useState } from 'react'
// import { YOUTUBE_VIDEOS_API } from './constants';

const useVideos = (YOUTUBE_VIDEOS_API) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();

        const getVideos = async () => {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            console.log("hook");
            console.log(json.items);
            setVideos(json.items);
    
        };
    },[]); 

    
  return videos ;
}

export default useVideos;
