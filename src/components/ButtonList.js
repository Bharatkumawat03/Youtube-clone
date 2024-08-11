import React from 'react'
import Button from './Button'

const list = ["All", "Music", "Live", "News", "Indian Premier League", "Mixes", "Shark Tank", "Computer Programming","Recently uploaded", "Watched", "New to you","Live", "News", "Indian Premier League", "Mixes", "Shark Tank", "Computer Programming","Recently uploaded", "Watched", "New to you"];

const ButtonList = () => {
  return (
    <div className=' '>
    <div className='flex  bg-white dark:bg-neutral-950 dark:text-white   top-16  ps-4 py-3 fixed w-full overflow-x-auto no-scrollbar gap-3 '>
        {list.map((item) => <Button  name={item} /> )}
      
    </div>

    </div>
  )
}

export default ButtonList
