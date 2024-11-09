import React from 'react'

const Card = (props) => {

  return (
      <div className='m-5 inline-block p-6 text-center bg-white text-black'>
        <img className='ml-3 h-32 w-32 rounded-full mb-3' src={props.photou} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
        <h2>{props.city}, {props.age}</h2>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded'>Add friend</button>


        
      </div>
  )
}

export default Card