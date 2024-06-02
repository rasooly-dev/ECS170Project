import React from 'react';

const SurveyQuestion = ({ question, type, options, name, min, max, step }) => {
  const renderInputField = () => {
    switch (type) {
      case 'text':
        return <input type="text" name={name} />;
      case 'int':
        return <input type="number" name={name} min={min} max={max} step={step} />;
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
    <div className='p-8 text-lg'>
        <div className='flex flex-col w-fit'>
            <label>{question}</label>
            {renderInputField()}
        </div>
    </div>
  );
};

export default SurveyQuestion;
