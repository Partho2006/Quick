import React from 'react'
import gradientBg from '../assets/gradientBackground.png'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Button1 from './Button1';
import Button2 from './Button2';

const Hero = () => {

    const navigate = useNavigate();

    return (
        <div
            className="px-4 sm:px-16 xl:px-24 relative inline-flex flex-col w-full justify-center items-center text-3xl font-bold text-gray-900 min-h-screen"
        >
            <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mb-4 text-gray-900">
                    Create Amazing Content with{' '}
                    <span className="inline-block px-4 py-2 mt-2 rounded-4xl bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800 cursor-pointer hover:scale-105 active:scale-95 duration-300 transition">
                        AI Tools
                    </span>
                </h1>
                <p className="text-lg text-gray-600 mt-4 max-w-xs sm:max-w-lg xl:max-w-4xl m-auto">
                    Harness the power of artificial intelligence to generate creative, engaging, and professional content effortlessly. Transform your ideas into reality in minutes.
                </p>
            </div>

            <div onClick={() => navigate('/ai')} className="grid md:grid-cols-2 justify-center gap-4 text-sm max-sm:text-xs">
                <Button1 />
                <Button2 />
            </div>

            <div className="flex items-center gap-2 mt-8 mx-auto text-gray-700 text-sm">
                <img src={assets.user_group} alt="" className='h-8' />
                Trusted by over 1000+ users worldwide
            </div>
        </div>
    )
}

export default Hero
