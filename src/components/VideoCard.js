import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info); 
    const {snippet, statistics} =info;  
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-4 w-full '>
      <img className='rounded-xl w-96' alt='thumbnail' src={thumbnails.medium.url} />
      <div className='flex'>
      {/* <img className='w-8 h-8 rounded-full pt-4 bg-red-400' src='' /> */}
      <ul>
        <li className=' text-ellipsis pt-2 w-5/6 font-bold line-clamp-2 overflow-hidden'>{title}</li>
        <li className='text-sm dark:text-gray-200 text-gray-700'>{channelTitle}</li> 
        <li className='text-sm dark:text-gray-200 text-gray-700 '>{statistics.viewCount} Views</li>
      </ul>
      </div>
    </div>
  )
}

export default VideoCard;
