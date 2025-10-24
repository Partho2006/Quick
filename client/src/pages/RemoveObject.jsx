import { Scissors, Sparkles } from 'lucide-react'
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveObject = () => {
  const [input, setInput] = useState('');
  const [object, setObject] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const { getToken } = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)

      if (object.split(' ').length > 1) {
        return toast('Please enter only one object name!!')
      }

      const formData = new FormData()
      formData.append('image', input)
      formData.append('object', object)

      const { data } = await axios.post('/api/ai/generate-image-object', formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      })

      if (data.success) {
        setContent(data.content)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-start h-full p-6 gap-4 md:fixed'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-xl border border-gray-300 shadow-sm mt-0 sm:mt-10'>
        <div className="flex items-center gap-3 text-gray-800 justify-center">
          <Sparkles className='w-6 text-purple-600' />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-800">Upload Image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept='image/*'
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-700"
          required
        />

        <p className="mt-6 text-lg font-semibold text-gray-800">Describe object to remove</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-700"
          placeholder='e.g., chair or towel, Only a single object name...'
          required
        />

        <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 mt-6 text-sm rounded-xl cursor-pointer font-semibold shadow hover:shadow-lg transition-shadow duration-500 ease-in-out hover:scale-105'>
          {
            loading ?
              <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
              : <Scissors className='w-5 text-white' />
          }
          Remove Object
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-xl border mt-0 md:mt-10 border-gray-300 shadow-sm flex flex-col min-h-95 items-center">
        <div className="flex items-center gap-3 justify-center">
          <Scissors className='w-6 h-6 text-purple-600' />
          <h1 className="text-xl font-semibold text-gray-800">Processed Image</h1>
        </div>
        {
          !content ? (
            <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-4 text-gray-500">
            <Scissors className='w-9 h-9 text-gray-400' />
            <p>Enter a topic and click "Remove Object" to get started...</p>
          </div>
        </div>
          ) : (
            <div className="mt-3 h-full">
              <img src={content} alt="image" className='w-full h-full' />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default RemoveObject
