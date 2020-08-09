import React, { useEffect, useState } from 'react';

export function SpeechText({ speechIngrediants, handleChange }) {

  const [availableVoices, setAvailableVoices] = useState(speechSynthesis.getVoices());
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      speechIngrediants.lang !== '' &&
      speechIngrediants.pitch !== '' &&
      speechIngrediants.rate !== '' &&
      speechIngrediants.speechText !== ''
    ) 
    {
      console.log(speechIngrediants);
    }
  }

  // effects
  useEffect(() => {
    setAvailableVoices(speechSynthesis.getVoices());
  }, []);
  useEffect(() => {
    if (availableVoices) {
      console.log(availableVoices);
    }
  }, [availableVoices]);
  return (
    <div className="speech-text p-4 flex justify-center">
      <div className="lg:w-1/3 md:w-2/3 w-full">
        <form onSubmit={handleSubmit}>
          <textarea 
            name="speechText"
            onChange={handleChange}
            id="speechText"
            className="bg-gray-200 h-32 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <br />
          <button 
            type="submit" 
            className="group w-full 
            py-2 px-4 mr-4 border border-transparent 
            text-sm leading-5 font-medium rounded-md text-white 
            bg-purple-500 hover:bg-purple-400 focus:outline-none 
            focus:border-purple-400 focus:shadow-outline-purple 
            active:bg-purple-400 active:outline-none transition duration-150 ease-in-out"
          >
            <i className="fas fa-volume-up mr-2" />
            Speak
          </button>
        </form>
      </div>
    </div>
  )
}