import { useEffect, useState } from 'react'
import { SEARCH_RESULT_API } from '../constants';

const useSearchVideos = (searchQuery) => {
    const [searchVideos, setSearchVideos] = useState([]);
    
    const getSearchVideos = async () => {
        const data = await fetch(SEARCH_RESULT_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSearchVideos(json.items);
    }
    useEffect(() => {
        if (searchQuery) {
            getSearchVideos();
        } 
        // else {
        //     setSearchVideos([]);
        // }
    },[searchQuery]);
    // async function getSearchVideos() {
    //     try {
    //       const data = await fetch(SEARCH_RESULT_API + searchQuery);
    //       const json = await data.json();
    //       setSearchVideos(json?.items);
    //       console.log(json)
    //     } catch {
    //       console.error("something went wrong !!");
    //     }
    //   }
  return searchVideos
}

export default useSearchVideos;
