import React, { useState, useEffect } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState(''); // State to track the input

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default action for Enter key
        calculateResult();
      } else if (event.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (!isNaN(Number(event.key)) || '+-*/().^'.includes(event.key)) {
        setInput((prev) => prev + event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array to avoid unnecessary re-renders

  // Handle button click for calculations and inputs
  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  // Evaluate the expression
  const calculateResult = () => {
    try {
      // Handle power calculation (x^y)
      const formattedInput = input.replace(/\^/g, '**'); // Replace ^ with **
      const result = eval(formattedInput);
      setInput(result.toString());
    } catch {
      setInput('Error'); // Handle invalid expressions
    }
  };

  // Clear the input
  const clearInput = () => {
    setInput('');
  };

  // Functions for advanced calculations (using Math library)
  const handleAdvancedFunction = (func: string) => {
    try {
      const result = eval(`Math.${func}(${input})`).toString();
      setInput(result);
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="fixed right-16 bottom-8 max-w-md mx-auto border rounded-lg shadow-lg p-4 bg-white dark:bg-black text-black dark:text-white">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Allow direct editing
          className="w-full p-2 border rounded text-right text-l bg-gray-100 dark:bg-gray-900"
          placeholder="0"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {/* Numeric and Operator Buttons */}
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'C', 0, '=', '/'].map(
          (btn, index) => (
            <button
              key={index}
              className="p-2 border bg-gray-200 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 rounded-lg shadow"
              onClick={() =>
                btn === '='
                  ? calculateResult()
                  : btn === 'C'
                  ? clearInput()
                  : handleButtonClick(btn.toString())
              }
            >
              {btn}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Advanced Functions */}
        {['sin', 'cos', 'tan', 'log', 'sqrt', 'pow', '(', ')'].map(
          (func, index) => (
            <button
              key={index}
              className="p-2 border bg-gray-200 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 rounded-lg shadow"
              onClick={() => (func === 'pow' ? handleButtonClick('^') : handleAdvancedFunction(func))}
            >
              {func === 'pow' ? 'x^y' : func}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
