import React, { useEffect, useState } from 'react'
import { SignIn, useUser } from '@clerk/clerk-react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';

const Community = () => {
  const [creations, setCreations] = useState([]);
  const {user} = useUser();

  const fetchCreations = () => {
    setCreations(dummyPublishedCreationData);
  }
  useEffect(()=> {
    if(user) {
      fetchCreations();
    }
  },[user])

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6 text-gray-800 mt-0 sm:mt-10'>
       
      <div className="bg-gray-200 h-fit w-full rounded-2xl border border-gray-400 p-4 gap-4">
        <p className="text-gray-800 p-2 font-semibold text-xl">Creations</p>
        {
          creations.map((creation, index)=> (
            <div key={index} className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3 hover:scale-105 transition-all duration-300 ease-in-out">
              <img src={creation.content} alt="" className='w-full h-full object-cover rounded-lg'/>

              <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 rounded-lg text-white transition-all duration-400 ease-in-out">
                <p className="text-sm hidden group-hover:block">{creation.prompt}</p>
                <div className="flex gap-1 items-center">
                  <p className="">{creation.likes.length}</p>
                  <Heart className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creation.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-pink-500'}`}/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Community
