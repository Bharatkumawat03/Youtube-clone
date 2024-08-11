import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultCard = ({video}) => {
    const {snippet, id} = video;
    const {thumbnails, title, channelTitle} = snippet;
  return (
    <div>
      {id?.channelId ? (
        <div>
            <img src={thumbnails?.default?.url} alt={title} />
            <span>
                <p>{title}</p>
                <p>@{channelTitle}</p>
            </span>
        </div>
      ) : (
        <div>
            <Link to={"/watch?v="+id.videoId} >
            <img src={thumbnails?.default?.url} alt={title} />
            <span>
                <p>{title}</p>
                <p>@{channelTitle}</p>
            </span>
            </Link>
        </div>
      )}
    </div>
  )
}

export default SearchResultCard;
