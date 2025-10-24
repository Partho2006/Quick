import { Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import Markdown from 'react-markdown';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const BlogTitles = () => {
  const blogCategories = ['General', 'Technology', 'Health', 'Education', 'Travel', 'Food', 'Sports']

  const [selectedCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const { getToken } = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)

      const prompt = `Generate a blog title for the keyboard ${input} on the category ${selectedCategory}`

      const { data } = await axios.post('/api/ai/generate-blog-title', { prompt }, {
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
        <div className="flex items-center gap-3 justify-center text-gray-800">
          <Sparkles className='w-6 text-purple-600' />
          <h1 className="text-xl font-semibold">Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-800">Keywords</p>

        <input 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          type="text" 
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-700" 
          placeholder='e.g., title for my latest blog...' 
        />

        <p className="mt-4 text-lg font-semibold text-gray-800">Category</p>

        <div className="mt-3 grid grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
          {
            blogCategories.map((item) => (
              <span 
                onClick={() => setSelectedCategory(item)} 
                key={item} 
                className={`text-xs px-3 py-2 rounded-full cursor-pointer flex justify-center transition-all duration-200 ease-in-out border ${
                  selectedCategory === item
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white font-semibold border-gray-200'
                    : 'bg-gray-100 hover:bg-gray-300 border-gray-300'
                }`}
              >
                {item}
              </span>
            ))
          }
        </div>

        <button 
          disabled={loading} 
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-700 hover:from-purple-600 hover:to-indigo-800 text-white px-4 py-2 mt-6 text-sm rounded-xl cursor-pointer font-semibold shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
        >
          {
            loading ?
              <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
              :
              <Hash className='w-5' />
          }
          Generate Title
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-xl border border-gray-300 shadow-sm flex flex-col min-h-95 items-center mt-0 md:mt-10">
        <div className="flex items-center gap-3 justify-center">
          <Hash className='w-6 h-6 text-purple-600' />
          <h1 className="text-xl font-semibold text-gray-800">Generated Titles</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-4 text-gray-500">
              <Hash className='w-9 h-9 text-gray-400' />
              <p>Enter a topic and click "Generate Title" to get started...</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 text-sm text-gray-700 overflow-y-auto md:max-h-[70vh]">
            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default BlogTitles
