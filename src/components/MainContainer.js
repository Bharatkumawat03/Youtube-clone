import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`overflow-x-hidden dark:bg-neutral-950 ml-auto w-5/6 pt-4  ${isMenuOpen ? 'w-5/6': 'w-full'}`
    }>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
