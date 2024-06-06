'use client'

import React, {useState} from 'react';

const SurveyQuestion = ({ question, type, options, name, min, max, step }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonClick = (option) => {
    setSelectedOption(option);
  };

  const renderInputField = () => {
    switch (type) {
      case 'text':
        return <input type="text" name={name} className='rounded-xl border shadow'/>;
      case 'int':
        return <input type="number" name={name} min={min} max={max} step={step} className='rounded-xl border shadow'/>;
      case 'select':
        return (
          <select name={name}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="inline-flex">
            {options.map((option,index) => (
               <label
               key={index}
               className={`bg-white w-40 h-12 text-xl m-6 text-center font-thin font-['DM Sans'] border rounded-xl flex items-center justify-center cursor-pointer ${
                 selectedOption === option ? 'bg-[#547FA7] text-white border-[#547FA7]' : ''
               }`}
               onClick={() => handleRadioButtonClick(option)}
             >
              <input type="radio" name={name} value={option} className='hidden' checked={selectedOption === option} onChange={() => {}}/>
              {option}
              </label>
            ))}
            <input type='hidden' name={name} value={selectedOption}/>
          </div>
        );
      case 'slider':
        return <input type="range" name={name} min={min} max={max} step={step} />;
      default:
        return null;
    }
  };

  return (
      <div className='p-10 text-lg'>
        <div className='flex flex-col w-full font-sans'>
            <label>{question}</label>
            {renderInputField()}
        </div>
      </div>
  );
};

export default SurveyQuestion;
