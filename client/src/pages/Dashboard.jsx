import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets';
import { Gem, Sparkles } from 'lucide-react';
import { Protect } from '@clerk/clerk-react';
import CreationItem from '../components/CreationItem';

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const getDashBoardData = async () => {
    setCreations(dummyCreationData);
  }
  useEffect(() => {
    getDashBoardData()
  }, [])

  return (
    <div className='h-full p-4'>
      <div className="flex justify-start gap-4 flex-wrap">

        {/* Total Creations */}
        <div className="flex justify-between items-start w-72 p-4 px-6 bg-white rounded-xl border border-gray-300 shadow-sm mt-0 sm:mt-12">
          <div className="text-gray-800">
            <p className="text-sm">Total Creations-</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
            <Sparkles className='w-5 h-5 text-white' />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-start w-72 p-4 px-6 bg-white rounded-xl border border-gray-300 shadow-sm">
          <div className="text-gray-800">
            <p className="text-sm">Active Plan-</p>
            <h2 className='text-xl font-semibold'>
              <Protect plan='premium' fallback='Free'>Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
            <Gem className='w-5 h-5 text-white' />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="mt-8 mb-4 text-gray-800 text-2xl">Recent Creations</p>
        {
          creations.map((item) =>
            <CreationItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Dashboard
