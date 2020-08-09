/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export function SpeakerStudio({ handleChange, speechIngrediants, synth, setSpeechIngrediants }) {

  // states
  const [voices, setVoices] = useState([]);
  // functions
  const getVoices = () => {
    setVoices(synth.getVoices());
  }
  // effects
  useEffect(() => {
    getVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = getVoices;
    };
  }, []);
  useEffect(() => {
    if (speechIngrediants.lang !== "") {
      voices.forEach(voice => {
        if (voice.lang === speechIngrediants.lang) {
          setSpeechIngrediants({
            ...speechIngrediants,
            voice: voice
          });
        }
      })
    }
  }, [speechIngrediants.lang]);
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 
                rounded w-full py-2 px-4 text-gray-700 leading-tight 
                focus:outline-none focus:bg-white focus:border-purple-500"
            >
              <>
                {voices && voices.length > 0 ? (
                  <>
                    <option value="">---</option>
                    {voices.map((voice, index) => {
                      return (
                        <option key={index} value={voice.lang}>{voice.name}</option>
                      )
                    })}
                  </>
                ) : (
                  <option>---</option>
                )}
              </>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <div className="">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
              htmlFor="pitch">
                Pitch
                <>
                  {speechIngrediants && speechIngrediants.pitch !== '' ? (
                    <span 
                      className="bg-purple-500 ml-2 px-2 py-1 
                        text-xs font-bold text-white rounded-full"
                    >
                      {speechIngrediants.pitch}
                    </span>
                  ) : null}
                </>
            </label>
            <input
              type="range" 
              name="pitch" 
              id="pitch" 
              min="0"
              max="2"
              defaultValue="1"
              step="0.1"
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
                <>
                  {speechIngrediants && speechIngrediants.rate !== '' ? (
                    <span 
                      className="bg-purple-500 ml-2 px-2 py-1 
                        text-xs font-bold text-white rounded-full"
                    >
                      {speechIngrediants.rate}
                    </span>
                  ) : null}
                </>
            </label>
            <input 
              type="range" 
              name="rate" 
              id="rate" 
              min="0.5"
              max="2"
              defaultValue="1"
              step="0.1"
              onChange={handleChange} 
              className="focus:outline-none w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}