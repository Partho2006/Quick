import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
    return (
        <div className="max-w-2xl mx-auto z-10 my-8 md:my-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900">
                    Choose Your <span className="text-purple-700">Plan</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                    Select the perfect plan to elevate your content creation with AI-powered tools.
                </p>
            </div>

            <div className="mt-10 max-sm:mx-6">
                <div className="bg-black/20 border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <PricingTable />
                </div>
            </div>
        </div>
    )
}

export default Plan
