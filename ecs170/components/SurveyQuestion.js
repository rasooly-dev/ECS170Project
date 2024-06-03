import React from 'react';

const SurveyQuestion = ({ question, type, options, name, min, max, step }) => {
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
        return options.map((option, index) => (
          <label key={index}>
            <input type="radio" name={name} value={option} />
            {option}
          </label>
        ));
      case 'slider':
        return <input type="range" name={name} min={min} max={max} step={step} />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-[#FFFFFF] p-4 h-fit rounded-2xl mb-[23px] mt-[23px] ml-[10px] mr-[10px]'>
      <div className='p-4 text-lg'>
        <div className='flex flex-col w-fit font-hammersmith'>
            <label>{question}</label>
            {renderInputField()}
        </div>
      </div>
    </div>
    
  );
};

export default SurveyQuestion;
