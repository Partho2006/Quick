import { Hash, Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const GenerateImages = () => {
  const imageStyle = ['Realistic', 'Ghibli', 'Anime', 'Cartoon', 'Fantasy', '3D', 'Pixel']
  const [selectedStyle, setSelectedStyle] = useState('Realistic');
  const [input, setInput] = useState('');
  const [publish, setPublish] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-start h-full p-6 gap-4 md:fixed'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-xl border border-gray-300 shadow-sm mt-0 sm:mt-10'>
        <div className="flex items-center gap-3 justify-center text-gray-800">
          <Sparkles className='w-6 text-indigo-500' />
          <h1 className="text-xl font-semibold">Image Generator</h1>
        </div>
        <p className="mt-6 text-lg font-semibold text-gray-800">Describe Your Image</p>

        <textarea 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          rows={4} 
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-700" 
          placeholder='e.g., A boy playing with a cat...' 
          required 
        />

        <p className="mt-4 text-lg font-medium text-gray-800">Styles</p>

        <div className="mt-3 w-full grid grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
          {imageStyle.map((item) => (
            <span 
              onClick={() => setSelectedStyle(item)} 
              key={item} 
              className={`text-xs px-3 py-2 rounded-full cursor-pointer flex justify-center transition-all duration-200 ease-in-out border ${
                selectedStyle === item
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white font-semibold border-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-md bg-gray-200 peer-checked:bg-purple-600 peer-checked:border-purple-700 transition-all duration-300">
              {publish && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </label>
          <p className="text-sm text-gray-700 font-semibold">Make this public...</p>
        </div>

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-700 hover:from-purple-600 hover:to-indigo-800 text-white px-4 py-2 mt-6 text-sm rounded-xl cursor-pointer font-semibold shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
          <Image className='w-5' />
          Generate Image
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-xl border border-gray-300 shadow-sm flex flex-col min-h-95 items-center">
        <div className="flex items-center gap-3 justify-center">
          <Image className='w-6 h-6 text-indigo-500' />
          <h1 className="text-xl font-semibold text-gray-800">Generated Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-4 text-gray-500">
            <Image className='w-9 h-9 text-gray-400' />
            <p>Enter a topic and click "Generate Image" to get started...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages
