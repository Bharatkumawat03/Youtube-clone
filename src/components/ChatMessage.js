import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div>
      <div className='flex gap-2 items-center p-3'>  
      <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      <h1 className='font-semibold'>{name}</h1>
      <h1>{message}</h1>
      </div>
    </div>
  )
}

export default ChatMessage;
