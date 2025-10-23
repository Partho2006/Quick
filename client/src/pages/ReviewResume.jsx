import { Eraser, FileText, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const ReviewResume = () => {
  const [input, setInput] = useState('');
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-start h-full p-6 gap-4 md:fixed'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-xl border border-gray-300 shadow-sm max-h-[600px] mt-0 sm:mt-10'>
        <div className="flex items-center gap-3 text-gray-800 justify-center">
          <Sparkles className='w-6 text-indigo-600' />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-800">Upload Resume</p>
        <input 
          onChange={(e) => setInput(e.target.files[0])} 
          type="file" 
          accept='application/pdf' 
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-700" 
          required 
        />

        <p className="mt-4 text-sm font-medium text-gray-500">
          Supports PDF resume only.
        </p>

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 mt-6 text-sm rounded-xl cursor-pointer font-semibold shadow hover:shadow-lg transition-shadow duration-500 ease-in-out hover:scale-105'>
          <FileText className='w-5 text-white' />
          Review Resume
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-xl mt-0 md:mt-10 border-gray-300 shadow-sm flex flex-col min-h-95 items-center">
        <div className="flex items-center gap-3 justify-center">
          <FileText className='w-6 h-6 text-indigo-600' />
          <h1 className="text-xl font-semibold text-gray-800">Analysis Results</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-4 text-gray-500">
            <FileText className='w-9 h-9 text-indigo-400' />
            <p>Enter a topic and click "Review Resume" to get started...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume
