import React, { useState } from 'react';
import { SpeakerStudio } from './SpeakerStudio';
import { SpeechText } from './SpeechText';

export function SpeakerArea() {
  const [speechIngrediants, setSpeechIngrediants] = useState({
    lang: '',
    pitch: 1,
    rate: 1,
    speechText: ''
  });
  // functions
  const handleChange = (e) => {
    setSpeechIngrediants({
      ...speechIngrediants,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div className="">
      <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-700 mt-4">
          Tap to Speak
      </h2>
      <SpeakerStudio 
        speechIngrediants={speechIngrediants}
        setSpeechIngrediants={setSpeechIngrediants}
        handleChange={handleChange}
      />
      <SpeechText 
        speechIngrediants={speechIngrediants}
        handleChange={handleChange}
      />
    </div>
  )
}