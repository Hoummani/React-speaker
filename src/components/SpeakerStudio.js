import React from 'react';

export function SpeakerStudio({ handleChange }) {

  return (
    <div className="speaker-studio p-4 flex justify-center">
      <div className="lg:w-1/3 md:w-2/3 w-full">
        <div className="mb-4">
          <div className="">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
              htmlFor="lang">
                Lang
            </label>
            <select 
              name="lang" 
              onChange={handleChange}
              id="lang" 
              className="bg-gray-200 w-full appearance-none border-2 border-gray-200 
                rounded w-full py-2 px-4 text-gray-700 leading-tight 
                focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <option value="">---</option>
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <div className="">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
              htmlFor="pitch">
                Pitch
            </label>
            <input
              type="range" 
              name="pitch" 
              id="pitch" 
              onChange={handleChange}
              className="focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
              htmlFor="rate">
                Rate
            </label>
            <input 
              type="range" 
              name="rate" 
              id="rate" 
              onChange={handleChange} 
              className="focus:outline-none w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}