import React from 'react'

const Button = ({name}) => {
  return (
    <div className=' '>
      <button className='px-3 py-1 align-middle bg-gray-200 dark:bg-white dark:bg-opacity-20 rounded-md  text-nowrap ' >{name}</button>
    </div>
  )
}

export default Button
