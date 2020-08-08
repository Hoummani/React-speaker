import React, { useState } from 'react';
import { SpeakerStudio } from './SpeakerStudio';
import { SpeechText } from './SpeechText';

export function SpeakerArea() {
  const [speechIngrediants, setSpeechIngrediants] = useState({
    lang: '',
    pitch: '',
    rate: '',
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
    <div className="flex justify-center">
      <div className="pt-6 w-full">
        <SpeakerStudio 
          handleChange={handleChange}
        />
        <br />
        <SpeechText 
          speechIngrediants={speechIngrediants}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}