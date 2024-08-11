import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useSearchVideos from '../utils/hooks/useSearchVideos';
import SearchResultCard from './SearchResultCard';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const searchQuery  = searchParams.get("searchQuery");
    console.log(searchQuery);
    const searchVideos = useSearchVideos(searchQuery);
    if(!searchVideos) return <h1>Loading</h1>;
    if(searchVideos.length === 0) return <h1>Loading</h1>;
  return (
    <div>
      <h1>searching results for {searchQuery}</h1>
      <div>{searchVideos?.map((video) =>{
        return <SearchResultCard video={video} />
      })}</div>
    </div>
  )
}

export default SearchResult;

























// import React, { useEffect, useState } from 'react'
// import { SEARCH_RESULT_API } from '../utils/constants';
// import VideoCard from './VideoCard';
// import { useSearchParams } from 'react-router-dom';

// const SearchResult = () => {
//     const [searchedVideo, setSearchedVideo] = useState([]);
//     const [searchParams] = useSearchParams();
//     const searchQuery = searchParams.get('search_query');
//     useEffect(() => {
//         getSearchResult();
//     },[searchQuery]);
//     const getSearchResult = async () => {
//         const data = await fetch(SEARCH_RESULT_API + searchQuery);
//         const json = await data.json();
//         console.log("here");
//         console.log(json.items);
//       };
//   return (
//     <div>
//       <VideoCard />
//     </div>
//   )
// }

// export default SearchResult;

