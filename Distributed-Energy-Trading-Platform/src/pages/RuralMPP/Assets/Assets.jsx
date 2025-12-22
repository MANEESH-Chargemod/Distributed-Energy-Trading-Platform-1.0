import React from 'react'

const Assets = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">Assets</h1>
      <p className="text-gray-500 mt-2">List of VPP assets (Solar, Battery, EV Chargers).</p>
      
      {/* Assets list and controls */}
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Site
        </button>
      </div>
    </div>
  )
}

export default Assets
