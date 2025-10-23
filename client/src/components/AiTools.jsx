import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {

    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div className='px-4 sm:px-16 xl:px-24 text-gray-900 mt-16 md:mt-24'>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900">Powerful <span className='text-purple-800'>AI Tools</span></h2>
                <p className='text-gray-600 max-w-xl mx-auto mt-2'>
                    Discover next-gen AI tools built to turn ideas into stunning results in seconds.
                    Create smarter, faster, and better — all with the power of artificial intelligence.
                </p>
            </div>

            <div className="flex flex-wrap mt-10 justify-center gap-8">
                {AiToolsData.map((tool, index) => (
                    <div
                        key={index}
                        onClick={() => user && navigate(tool.path)}
                        className="w-72 h-64 bg-black/5 border border-gray-300 hover:border-purple-400 hover:bg-black/10 hover:shadow-lg p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:-translate-y-2"
                    >
                        <tool.Icon
                            className="w-14 h-14 p-3 text-white rounded-2xl mb-4 shadow-md"
                            style={{
                                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                            }}
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {tool.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiTools
