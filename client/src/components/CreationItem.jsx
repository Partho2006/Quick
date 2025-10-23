import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div 
            onClick={() => setExpanded(!expanded)} 
            className='p-4 max-w-5xl text-sm bg-white border border-gray-300 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300'
        >
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h2 className="font-semibold text-gray-800">{item.prompt}</h2>
                    <p className="text-gray-600">
                        {item.type} - {new Date(item.created_at).toLocaleDateString()}
                    </p>
                </div>
                <button className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border border-gray-300 rounded-full px-4 py-2 shadow hover:scale-105 transition-transform duration-300 ease-in-out'>
                    {item.type}
                </button>
            </div>
            {expanded && (
                <div className="mt-3">
                    {item.type === 'image' ? (
                        <div>
                            <img src={item.content} alt="img" className='w-full max-w-md rounded-md shadow-sm' />
                        </div>
                    ) : (
                        <div className="text-gray-700 text-sm">
                            <Markdown>
                                {item.content}
                            </Markdown>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CreationItem
