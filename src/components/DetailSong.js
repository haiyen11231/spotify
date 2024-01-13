import React from 'react'

export default function DetailSong() {
  return (
    <div className="col-span-1 p-3">
        <h2 className="text-cyan-500 font-bold">Now playing</h2>
        <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
        <div className="w-[240px] m-auto mt-10">
            <img className="w-full" src="https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c" alt="avatar"/>
        </div>
        <div className="flex justify-evenly items-center mt-10">
            <img className="w-[70px] rounded-full" src="https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c" alt="avatar"/>
            <span className="text-xl text-white">Alan Walker</span>
        </div>
    </div>
  )
}
