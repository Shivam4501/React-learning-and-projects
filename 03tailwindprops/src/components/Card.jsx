import React from 'react';

function Card({username, btn = "hit me"}) {
  console.log(username);//only to see in console.
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.pexels.com/photos/30426073/pexels-photo-30426073/free-photo-of-aerial-view-of-spree-river-and-cityscape-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{btn}</h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet
      </p>
    </div>
  )
}

export default Card;