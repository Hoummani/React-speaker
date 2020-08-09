import React, { useState } from 'react';
import { SpeakerStudio } from './SpeakerStudio';
import { SpeechText } from './SpeechText';

export function SpeakerArea() {
  // speech ingrediants
  const [speechIngrediants, setSpeechIngrediants] = useState({
    lang: '',
    pitch: 1,
    rate: 1,
    speechText: '',
    voice: null
  });
  // Init SpeechSynth API
  const synth = window.speechSynthesis;
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
        synth={synth}
        setSpeechIngrediants={setSpeechIngrediants}
        handleChange={handleChange}
      />
      <SpeechText 
        speechIngrediants={speechIngrediants}
        handleChange={handleChange}
        synth={synth}
      />
    </div>
  )
}