'use client'

import React, {useState} from 'react';

const SurveyQuestion = ({ question, type, options, description, name, min, max, step }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const renderInputField = () => {
    switch (type) {
      case 'text':
        return <input type="text" name={name} className='rounded-xl border shadow h-[50px] font-sans '/>;
      case 'int':
        return <input type="number" name={name} min={min} max={max} step={step} className='rounded-xl border shadow h-[50px]'/>;
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
          <div className="inline-flex space-x-4">
            {options.map((option,index) => (
               <label
               key={index}
               className={`w-40 h-12 text-xl text-center font-thin font-['DM Sans'] border rounded-xl flex items-center justify-center cursor-pointer ${
                 selectedOption === option ? 'bg-custom-blue text-white border-custom-blue': 'bg-white'
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
        return (
          <div className="flex space-x-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-sans cursor-pointer ${
                  selectedOption === num ? 'bg-custom-blue text-white' : 'bg-white'
                }`}
                onClick={() => handleButtonClick(num)}
              >
                {num}
              </button>
            ))}
            <input type="hidden" name={name} value={selectedOption} />
          </div>
        );

        
      default:
        return null;
    }
  };

  return (
      <div className='p-2 text-lg'>
        <div className='flex flex-col w-full h-full font-sans pt-4'>
            <label>{question}</label>
              {renderInputField()}
            {description && <p className="text-sm text-custom-gray mt-2">{description}</p>}
        </div>
      </div>
  );
};

export default SurveyQuestion;
