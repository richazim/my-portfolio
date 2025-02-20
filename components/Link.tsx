import React from 'react'

const Link = ({name}: {name: string}) => {
  return (
    <div className=''>
        <p className='py-[10px]'><a href="#">{name}</a></p>
    </div>
  )
}

export default Link