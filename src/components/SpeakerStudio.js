import React from 'react';

export function SpeakerStudio({ handleChange }) {

  return (
    <div className="speaker-studio">
      <div className="flex justify-center items-center w-full">
        <div className="mr-2">
          <label 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="lang">
              Lang
          </label>
          <select 
            name="lang" 
            onChange={handleChange}
            id="lang" 
            className="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">---</option>
            <option>English</option>
            <option>French</option>
          </select>
        </div>
        <div className="mr-2">
          <label 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="pitch">
              Pitch
          </label>
          <select  
            name="pitch" 
            id="pitch" 
            onChange={handleChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">---</option>
            <option>0</option>
            <option>0.5</option>
          </select>
        </div>
        <div className="">
          <label 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="rate">
              Rate
          </label>
          <select  
            name="rate" 
            id="rate" 
            onChange={handleChange} 
            className="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">---</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  )
}